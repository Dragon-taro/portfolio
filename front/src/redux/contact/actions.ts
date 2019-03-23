import { ISetContact } from "../../types/contact";
import { SET_CONTACT } from "./constants";
import { Action } from "../../types/utils";

// contactのformのstate更新
export const setContact = (payload: ISetContact): Action<ISetContact> => ({
  type: SET_CONTACT,
  payload: payload
});
