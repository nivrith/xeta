import http from 'http';
import { Options } from './options.interface';

export interface Response extends http.IncomingMessage {
  body: Buffer | string | any;
  statusCode: number;
  req: http.ClientRequest;
  requestUrl: string;
  redirectUrls: string[];
  request: { options: Options };
}

