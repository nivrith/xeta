import { HttpClientAdapter } from "./http-adapter.interface";
import { HttpClientOptions } from "./adapter-options";

export const readyState = {
  UNSENT: 0, //Client has been created. open() not called yet.
  OPENED: 1, // open() has been called.
  HEADERS_RECEIVED: 2, // send() has been called, and headers and status are available.
  LOADING: 3, // Downloading; responseText holds partial data.
  DONE: 4 // The operation is complete.
};

export const httpStatus = {
  SUCCESS: 200
};

export class XHRAdapter implements HttpClientAdapter {

  constructor(private options: HttpClientOptions ) {}

  public send(): Promise<any> {
    return new Promise((resolve, reject) => {
      // send request
      const xhr = new XMLHttpRequest();

      xhr.onerror = function(event) {
        reject(new Error(`An error occured on sending the request with status: ${this.status}`));
      };

      xhr.onreadystatechange = function(event) {
        if (this.readyState === readyState.DONE && this.status === httpStatus.SUCCESS) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.open(this.options.method, String(this.options.url), true);
      xhr.send();
    })
  }
}