import { fork } from "redux-saga/effects";
import contactSaga from "./contact/sagas";
import { History } from "history";
import questionSaga from "./question/sagas";

export default function* rootSaga(history: History<any>) {
  yield fork(contactSaga);
  yield fork(questionSaga);
}
