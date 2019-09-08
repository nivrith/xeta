import { Options } from "./options.interface";
import { HttpAlias } from "./types";
import { HttpClientAdapter } from "./adapters/http-adapter.interface";
import { HttpClientOptions } from "./adapters/adapter-options";

export type ReturnResponse = (url: string, options?: Options ) => Promise<Response>;

export interface DefaultOptions {
  options: Options
}

export interface Xeta extends Record<HttpAlias, ReturnResponse> {
  (url: string, options?: Options): Promise<any>;
  create: (defaults: DefaultOptions, adapterFactory: (options: HttpClientOptions) => HttpClientAdapter ) => Xeta
}

const aliases: HttpAlias[] = [
  'get',
  'post',
  'put',
  'patch',
  'head',
  'delete'
]

const normalizeOptions = (options: Options): HttpClientOptions => {
  return options as HttpClientOptions;
}

export const create = (defaults: Partial<DefaultOptions>, adapterFactory: (options: HttpClientOptions) => HttpClientAdapter): Xeta => {

  // @ts-ignore Because the we assing methods dynamically
  const xeta: Xeta = (url: string, options: Options): Promise<any> => {
    const client = adapterFactory(normalizeOptions(options));
    return client.send();
  }

  for (const method of aliases) {
    xeta[ method ] = (url: string, options?: Options) => xeta(url, { ...options, method, url });
  }
  xeta.create = create;
  return xeta;
}


