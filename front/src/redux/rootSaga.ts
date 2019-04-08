import { fork } from "redux-saga/effects";
import contactSaga from "./contact/sagas";
import { History } from "history";
import newQuestionSaga from "./newQuestion/sagas";
import questionsSaga from "./questions/sagas";
import questionSaga from "./question/sagas";
import answerSaga from "./answer/sagas";

export default function* rootSaga(history: History<any>) {
  yield fork(contactSaga);
  yield fork(newQuestionSaga);
  yield fork(questionsSaga);
  yield fork(questionSaga);
  yield fork(answerSaga);
}
