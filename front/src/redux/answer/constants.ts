import { Action, IDisaptchError } from "../../types/utils";
import { IAnswer, IGetAnswer } from "../../types/answer";

// answer
export const GET_ANSWER = "GET_ANSWER";
export const GET_ANSWER_SUCCESS = "GET_ANSWER_SUCCESS";
export const GET_ANSWER_FAILURE = "GET_ANSWER_FAILURE";

export type AnswerActions =
  | Action<IGetAnswer>
  | Action<IAnswer>
  | Action<IDisaptchError>;
