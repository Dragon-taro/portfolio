import {
  GET_QUESTIONS,
  QuestionActions,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from "./constants";
import { IQuestions } from "../../types/question";

const initState: IQuestions = {
  loading: false
};

export const QuestionsReducer = (
  state: IQuestions = initState,
  action: QuestionActions
): IQuestions => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return { ...state, loading: true };
    case GET_QUESTIONS_SUCCESS:
      return { ...payload, loading: false };
    case GET_QUESTIONS_FAILURE:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};
