/*!
 * xeta <https://github.com/nivrith/xeta>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */

import { create, DefaultOptions } from "./xeta";
import { XHRAdapter } from "./adapters/xhr";
import { HttpClientOptions } from "./adapters/adapter-options";

const defaultOptions: Partial<DefaultOptions> = {
  options: {
    method: 'GET'
  },
};

const xhrAdapterFactory  = (options: HttpClientOptions) => {
  return new XHRAdapter(options);
}
export const xeta = create(defaultOptions, xhrAdapterFactory);
export default xeta;
