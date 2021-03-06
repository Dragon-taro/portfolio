import { Action, IDisaptchError } from "../../types/utils";
import { IQuestion, IGetQuestion } from "../../types/question";

export const GET_QUESTION = "GET_QUESTION";
export const GET_QUESTION_SUCCESS = "GET_QUESTION_SUCCESS";
export const GET_QUESTION_FAILURE = "GET_QUESTION_FAILURE";

export type QuestionActions =
  | Action<IGetQuestion>
  | Action<IQuestion>
  | Action<IDisaptchError>;
