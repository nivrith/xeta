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
      hostname: this.options.hostname,
      path: parsed.path,
      method: this.options.method,
      headers: {
        'Content-Type': 'application/json',
        ...this.options.headers
      }
  }
    return new Promise((resolve, reject) => {
      client.request(options, res => {
        let data = '';
        res.on('data', chunk => data+= chunk);
        res.on('end', () => resolve(JSON.parse(data)));
        res.on('error', error => reject(error));
      })
    })
  }

}