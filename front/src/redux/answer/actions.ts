import {
  GET_ANSWER,
  GET_ANSWER_SUCCESS,
  GET_ANSWER_FAILURE
} from "./constants";
import { Action, IDisaptchError } from "../../types/utils";
import { IGetAnswer, IAnswer } from "../../types/answer";

export const getAnswer = (questionId: string): Action<IGetAnswer> => ({
  type: GET_ANSWER,
  payload: { questionId }
});

export const getAnswerSuccess = (payload: IAnswer): Action<IAnswer> => ({
  type: GET_ANSWER_SUCCESS,
  payload: payload
});

export const getAnswerFailure = (
  payload: IDisaptchError
): Action<IDisaptchError> => ({
  type: GET_ANSWER_FAILURE,
  payload: payload
});
