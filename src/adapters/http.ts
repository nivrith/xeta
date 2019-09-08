import { HttpClientAdapter } from "./http-adapter.interface";
import { Options } from "../options.interface";
import { HttpClientOptions } from "./adapter-options";
import url from 'url';
import http from 'http';
import https from 'https';
import {Observable} from 'rxjs';

const isHttps = /https:?/;
export class HttpAdapter implements HttpClientAdapter  {
  constructor(private options: HttpClientOptions) {}
  public send(): Observable<any> {

    var parsed = url.parse(String(this.options.url));
    var protocol = parsed.protocol || 'http:';

    const client = isHttps.test(protocol) ? https : http;

    const options = {
      hostname: parsed.hostname,
      port: 443,
      timeout: 3000,
      path: parsed.path,
      method: this.options.method,
      headers: {
        'accept': 'application/json;charset=UTF-8',
        ...this.options.headers
      }
    }
    // console.log(options);
    return new Observable((subscriber) => {
      const request = client.request(options, res => {
        let data = '';
        res.on('data', chunk => {data+= chunk});
        res.on('end', () => {
          subscriber.next(JSON.parse(data));
          subscriber.complete();
        });
      });
      request.on('error', error => { subscriber.error(error) });
      request.end();
    })
  }

}