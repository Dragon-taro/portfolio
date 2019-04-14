import { takeEvery, call, put } from "redux-saga/effects";
import { GET_QUESTIONS } from "./constants";
import { Action, IAPIResponse, IGet } from "../../types/utils";
import { Get } from "../api/fetch";
import { IQuestions, IGetQuestions } from "../../types/question";
import { getQuestionsFailure, getQuestionsSuccess } from "./actions";
import updateQueryString from "../../utils/updateQueryString";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function getQuestions(params: IGet) {
  return Get<{}, IQuestions>(params);
}

function* sagaGetQuestions(action: Action<IGetQuestions>) {
  const {
    payload: { page = 0 }
  } = action;
  const params: IGet<{}> = {
    path: `/api/questions?page=${page}`
  };
  const { resp, error }: IAPIResponse<IQuestions> = yield call(
    getQuestions,
    params
  );

  if (error) {
    yield put(getQuestionsFailure({ error: error.message }));
  } else {
    yield resp && put(getQuestionsSuccess(resp));
    updateQueryString(`?page=${page}`);
  }
}

export default function* questionsSaga() {
  yield takeEvery(GET_QUESTIONS, sagaGetQuestions);
}
