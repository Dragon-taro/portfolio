import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from "./constants";
import { Action, IDisaptchError } from "../../types/utils";
import { IQuestion } from "../../types/question";

export const getQuestions = (): Action<{}> => ({
  type: GET_QUESTIONS,
  payload: {}
});

export const getQuestionsSuccess = (
  payload: IQuestion[]
): Action<IQuestion[]> => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: payload
});

export const getQuestionsFailure = (
  payload: IDisaptchError
): Action<IDisaptchError> => ({
  type: GET_QUESTIONS_FAILURE,
  payload: payload
});
