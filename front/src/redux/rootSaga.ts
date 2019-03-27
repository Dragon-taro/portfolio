import { fork } from "redux-saga/effects";
import contactSaga from "./contact/sagas";
import { History } from "history";

export default function* rootSaga(history: History<any>) {
  yield fork(contactSaga);
}
