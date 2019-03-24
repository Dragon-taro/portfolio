import { fork, takeEvery, call } from "redux-saga/effects";
import { POST_CONTACT } from "./constants";
import { IContact } from "../../types/contact";
import { Action, IPost } from "../../types/utils";
import { Post, IAPIResponse } from "../api/fetch";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function postContact(params: IPost<IContact>) {
  return Post<IContact, string>(params);
}

function* sagaPostContact(action: Action<IContact>) {
  const { payload: body } = action;
  const params: IPost<IContact> = {
    path: "/api/contact",
    body
  };
  const { resp, error }: IAPIResponse<IContact> = yield call(
    postContact,
    params
  );
}

export default function* contactSaga() {
  yield takeEvery(POST_CONTACT, sagaPostContact);
}
