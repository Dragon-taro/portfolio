import { fork, call, take } from "redux-saga/effects";
import { POST_CONTACT } from "./constants";
import { IContact } from "../../types/contact";
import { Action, IPost, IAPIResponse } from "../../types/utils";
import { Post } from "../api/fetch";
import { History } from "history";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function postContact(params: IPost<IContact>) {
  return Post<IContact, string>(params);
}

function* sagaPostContact(history: History<any>) {
  const action: Action<IContact> = yield take(POST_CONTACT);
  const { payload: body } = action;
  const params: IPost<IContact> = {
    path: "/api/contact",
    body
  };
  const { resp, error }: IAPIResponse<IContact> = yield call(
    postContact,
    params
  );
  if (!error) {
    history.push("/contact/thanks");
  }
}

export default function* contactSaga(history: History<any>) {
  yield fork(sagaPostContact, history);
}
