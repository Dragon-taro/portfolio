import { IContact, ISetContact } from "../../types/contact";
import { Action } from "../../types/utils";
import { SET_CONTACT } from "./constants";

const initState: IContact = {
  name: "",
  email: "",
  type: "",
  details: ""
};

export const contactReducer = (
  state: IContact = initState,
  action: Action<ISetContact>
): IContact => {
  switch (action.type) {
    case SET_CONTACT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
