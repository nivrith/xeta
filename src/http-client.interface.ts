import { Options } from "./options.interface";

export interface HttpClient {
  get(url: string, options?: Options): Promise<any>
  post(url: string, options?: Options): Promise<any>
  put(url: string, options?: Options): Promise<any>
  patch(url: string, options?: Options): Promise<any>
  head(url: string, options?: Options): Promise<any>
  delete(url: string, options?: Options): Promise<any>
}