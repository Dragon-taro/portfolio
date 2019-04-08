import {
  GET_ANSWER,
  AnswerActions,
  GET_ANSWER_SUCCESS,
  GET_ANSWER_FAILURE
} from "./constants";
import { IOneAnswer, IAnswer } from "../../types/answer";

const initState: IOneAnswer = {
  loading: false
};

export const AnswerReducer = (
  state: IOneAnswer = initState,
  action: AnswerActions
): IOneAnswer => {
  const { type, payload } = action;
  switch (type) {
    case GET_ANSWER:
      return { ...state, loading: true };
    case GET_ANSWER_SUCCESS:
      const answer = payload as IAnswer;
      return { ...answer, loading: false };
    case GET_ANSWER_FAILURE:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};
