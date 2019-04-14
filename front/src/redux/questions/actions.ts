import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from "./constants";
import { Action, IDisaptchError } from "../../types/utils";
import { IQuestions, IGetQuestions } from "../../types/question";

export const getQuestions = (
  payload: IGetQuestions = {}
): Action<IGetQuestions> => ({
  type: GET_QUESTIONS,
  payload: payload
});

export const getQuestionsSuccess = (
  payload: IQuestions
): Action<IQuestions> => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: payload
});

export const getQuestionsFailure = (
  payload: IDisaptchError
): Action<IDisaptchError> => ({
  type: GET_QUESTIONS_FAILURE,
  payload: payload
});
