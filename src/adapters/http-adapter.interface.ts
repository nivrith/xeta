import {HttpClientOptions} from '../adapters/adapter-options';

export interface HttpClientAdapter {
  send(): Promise<any>
}