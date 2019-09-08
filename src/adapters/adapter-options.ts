import {Method} from '../types'
import {Options} from '../options.interface';
export interface HttpClientOptions extends Omit<Required<Options>, 'retry'> {
  hostname: string;
  method: Method;
  readonly baseUrl: string;
  host: string;
}