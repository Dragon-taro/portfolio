import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ANSWER } from "./constants";
import { Action, IAPIResponse, IGet } from "../../types/utils";
import { Get } from "../api/fetch";
import { getAnswerFailure, getAnswerSuccess } from "./actions";
import { IAnswer, IGetAnswer } from "../../types/answer";

function getQuestion(params: IGet) {
  return Get<{}, IAnswer>(params);
}

function* sagaGetQuestion(action: Action<IGetAnswer>) {
  const {
    payload: { questionId }
  } = action;

  const params: IGet<{}> = {
    path: `/api/answers/${questionId}`
  };
  const { resp, error }: IAPIResponse<IAnswer> = yield call(
    getQuestion,
    params
  );

  if (error) {
    yield put(getAnswerFailure({ error: error.message }));
  } else {
    yield resp && put(getAnswerSuccess(resp));
  }
}

export default function* answerSaga() {
  yield takeEvery(GET_ANSWER, sagaGetQuestion);
}
