export interface Action<Payload> {
  type: string;
  payload: Payload;
}

export interface IPost<Body> {
  path: string;
  body: Body;
}
