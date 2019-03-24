import { ISetContact, IContact } from "../../types/contact";
import { SET_CONTACT, POST_CONTACT } from "./constants";
import { Action } from "../../types/utils";

// contactのformのstate更新
export const setContact = (payload: ISetContact): Action<ISetContact> => ({
  type: SET_CONTACT,
  payload: payload
});

export const postContact = (payload: IContact): Action<IContact> => ({
  type: POST_CONTACT,
  payload: payload
});
