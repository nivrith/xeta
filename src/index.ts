/*!
 * xeta <https://github.com/nivrith/xeta>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */
import {HttpAdapter} from './adapters/http';
import { create, DefaultOptions } from "./xeta";
import { HttpClientOptions } from './adapters/adapter-options';

const defaultOptions: DefaultOptions = {
  options: {
    method: 'GET'
  },
};

const httpAdapterFactory = (options: HttpClientOptions) => new HttpAdapter(options)

export const xeta = create(defaultOptions, httpAdapterFactory);
export default xeta;
