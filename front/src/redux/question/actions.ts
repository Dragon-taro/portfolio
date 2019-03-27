import { SET_QUESTION, POST_QUESTION } from "./constants";
import { Action } from "../../types/utils";
import { ISetQuestion, IQuestion } from "../../types/question";

export const setQuestion = (payload: ISetQuestion): Action<ISetQuestion> => ({
  type: SET_QUESTION,
  payload: payload
});

export const postQuestion = (payload: IQuestion): Action<IQuestion> => ({
  type: POST_QUESTION,
  payload: payload
});
