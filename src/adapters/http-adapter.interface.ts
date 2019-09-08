import {HttpClientOptions} from '../adapters/adapter-options';
import { Observable } from 'rxjs';

export interface HttpClientAdapter {
  send(): Observable<any>
}