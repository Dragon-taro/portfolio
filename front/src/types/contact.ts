export interface IContact {
  name: string;
  email: string;
  type: string;
  details: string;
}

export interface ISetContact {
  [key: string]: string;
}
