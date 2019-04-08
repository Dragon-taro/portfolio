import {
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE
} from "./constants";
import { Action, IDisaptchError } from "../../types/utils";
import { IQuestion } from "../../types/question";

export const getQuestion = (id: string): Action<{ id: string }> => ({
  type: GET_QUESTION,
  payload: { id }
});

export const getQuestionSuccess = (payload: IQuestion): Action<IQuestion> => ({
  type: GET_QUESTION_SUCCESS,
  payload: payload
});

export const getQuestionFailure = (
  payload: IDisaptchError
): Action<IDisaptchError> => ({
  type: GET_QUESTION_FAILURE,
  payload: payload
});
