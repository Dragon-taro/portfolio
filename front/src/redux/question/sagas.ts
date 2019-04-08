import { takeEvery, call, put } from "redux-saga/effects";
import { GET_QUESTION } from "./constants";
import { Action, IAPIResponse, IGet } from "../../types/utils";
import { Get } from "../api/fetch";
import { IQuestion } from "../../types/question";
import { getQuestionFailure, getQuestionSuccess } from "./actions";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function getQuestion(params: IGet) {
  return Get<{}, IQuestion>(params);
}

function* sagaGetQuestion(action: Action<{ id: string }>) {
  const {
    payload: { id }
  } = action;

  const params: IGet<{}> = {
    path: `/api/questions/${id}`
  };
  const { resp, error }: IAPIResponse<IQuestion> = yield call(
    getQuestion,
    params
  );

  if (error) {
    yield put(getQuestionFailure({ error: error.message }));
  } else {
    yield resp && put(getQuestionSuccess(resp));
  }
}

export default function* questionSaga() {
  yield takeEvery(GET_QUESTION, sagaGetQuestion);
}
