export interface IContact {
  name: string;
  contactAddress: string;
  contactType: string;
  details: string;
}

export interface ISetContact {
  [key: string]: string;
}
