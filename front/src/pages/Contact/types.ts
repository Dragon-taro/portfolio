import { IContact, ISetContact } from "../../types/contact";

export interface Props {
  contact: IContact;
  setContact: (payload: ISetContact) => void;
  postContact: (payload: IContact) => void;
}
