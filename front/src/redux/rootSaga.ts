import { fork } from "redux-saga/effects";
import contactSaga from "./contact/sagas";
import { History } from "history";
import newQuestionSaga from "./newQuestion/sagas";
import questionsSaga from "./questions/sagas";

export default function* rootSaga(history: History<any>) {
  yield fork(contactSaga);
  yield fork(newQuestionSaga);
  yield fork(questionsSaga);
}
