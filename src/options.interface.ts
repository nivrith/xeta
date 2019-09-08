import { HttpMethod, HttpAlias, Method, Headers} from "./types";

export interface Options {
  host?: string;
  retry?: number;
  body?: string | Buffer | ReadableStream;
  hostname?: string;
  path?: string;
  protocol?: string;
  method?: Method;
  throwHttpErrors?: boolean;
  headers?: Headers;
  responseType?: ResponseType;
  baseUrl?: URL | string;
  url?: URL | string;
  searchParams?: Record<string, string | number | boolean | null> | URLSearchParams | string;
  form?: Record<string, any>;
  json?: Record<string, any>;

}