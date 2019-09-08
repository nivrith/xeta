export type HttpAlias = 'get' | 'put' | 'post'| 'patch' | 'head' |'delete';
export type HttpMethod= 'GET' | 'PUT' | 'POST' | 'PATCH' | 'HEAD' | 'DELETE';

export type Method = HttpAlias | HttpMethod;

export type Headers = Record<string, string | string[]>;
