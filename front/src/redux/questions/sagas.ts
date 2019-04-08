import { takeEvery, call, put } from "redux-saga/effects";
import { GET_QUESTIONS } from "./constants";
import { Action, IPost, IAPIResponse, IGet } from "../../types/utils";
import { Get } from "../api/fetch";
import { IQuestion } from "../../types/question";
import { getQuestionsFailure, getQuestionsSuccess } from "./actions";

// genericもりもりの関数をcallに渡せへんのだるすぎ
function getQuestions(params: IGet) {
  return Get<{}, IQuestion[]>(params);
}

function* sagaGetQuestions(_action: Action<{}>) {
  const params: IGet<{}> = {
    path: "/api/questions"
  };
  const { resp, error }: IAPIResponse<IQuestion[]> = yield call(
    getQuestions,
    params
  );

  if (error) {
    yield put(getQuestionsFailure({ error: error.message }));
  } else {
    yield resp && put(getQuestionsSuccess(resp));
  }
}

export default function* questionsSaga() {
  yield takeEvery(GET_QUESTIONS, sagaGetQuestions);
}
