import { fork, take, call } from "redux-saga/effects";
import { POST_QUESTION } from "./constants";
import { Action, IPost, IAPIResponse } from "../../types/utils";
import { Post } from "../api/fetch";
import { IQuestion } from "../../types/question";
import { History } from "history";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function postQuestion(params: IPost<IQuestion>) {
  return Post<IQuestion, string>(params);
}

function* sagaPostQuestion(history: History<any>) {
  const action: Action<IQuestion> = yield take(POST_QUESTION);
  const { payload: body } = action;

  const params: IPost<IQuestion> = {
    path: "/api/questions",
    body
  };
  const { resp, error }: IAPIResponse<IQuestion> = yield call(
    postQuestion,
    params
  );

  if (!error) {
    resp && history.push(`/questions/${resp.id}`);
  }
}

export default function* newQuestionSaga(history: History<any>) {
  yield fork(sagaPostQuestion, history);
}
