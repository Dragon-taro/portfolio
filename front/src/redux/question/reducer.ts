import {
  GET_QUESTION,
  QuestionActions,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE
} from "./constants";
import { IQuestion, IOneQuestion } from "../../types/question";

const initState: IOneQuestion = {
  loading: false
};

export const QuestionReducer = (
  state: IOneQuestion = initState,
  action: QuestionActions
): IOneQuestion => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTION:
      return { ...state, loading: true };
    case GET_QUESTION_SUCCESS:
      const question = payload as IQuestion;
      return { question: question, loading: false };
    case GET_QUESTION_FAILURE:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};
