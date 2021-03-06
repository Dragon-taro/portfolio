import { IPost, IAPIResponse, IGet } from "../../types/utils";

export const Post = <Req, Res>(
  params: IPost<Req>
): Promise<IAPIResponse<Res>> => {
  const { path, body } = params;
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then<Res>(res => {
      if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .then(resp => ({ resp }))
    .catch(error => ({ error } as IAPIResponse<Res>));
};

export const Get = <Req, Res>(
  params: IGet<Req>
): Promise<IAPIResponse<Res>> => {
  const { path } = params;
  return fetch(path, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then<Res>(res => {
      if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .then(resp => ({ resp }))
    .catch(error => ({ error } as IAPIResponse<Res>));
};
