export interface Action<Payload> {
  type: string;
  payload: Payload;
}

export interface IPost<Body> {
  path: string;
  body: Body;
}

export interface IGet<Query = any> {
  path: string;
  query?: Query;
}

export interface IAPIResponse<T> {
  resp?: T;
  error?: Error;
}

export interface IDisaptchError<T = string> {
  error: T;
}
