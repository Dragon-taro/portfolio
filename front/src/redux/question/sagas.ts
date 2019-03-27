import { fork, takeEvery, call } from "redux-saga/effects";
import { POST_QUESTION } from "./constants";
import { Action, IPost } from "../../types/utils";
import { Post, IAPIResponse } from "../api/fetch";
import { IQuestion } from "../../types/question";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function postQuestion(params: IPost<IQuestion>) {
  return Post<IQuestion, string>(params);
}

function* sagaPostQuestion(action: Action<IQuestion>) {
  const { payload: body } = action;
  console.log(body);

  const params: IPost<IQuestion> = {
    path: "/api/questions",
    body
  };
  const { resp, error }: IAPIResponse<IQuestion> = yield call(
    postQuestion,
    params
  );
}

export default function* questionSaga() {
  yield takeEvery(POST_QUESTION, sagaPostQuestion);
}
