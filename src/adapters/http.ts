import { HttpClientAdapter } from "./http-adapter.interface";
import { Options } from "../options.interface";
import { HttpClientOptions } from "./adapter-options";
import url from 'url';
import http from 'http';
import https from 'https';

const isHttps = /https:?/;
export class HttpAdapter implements HttpClientAdapter  {
  constructor(private options: HttpClientOptions) {}
  public send(): Promise<any> {

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
    return new Promise((resolve, reject) => {
      const request = client.request(options, res => {
        let data = '';
        res.on('data', chunk => {data+= chunk});
        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      });
      request.on('error', error => { reject(error) });
      request.end();
    })
  }

}