import { Action, IDisaptchError } from "../../types/utils";
import { IQuestion } from "../../types/question";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export type QuestionActions =
  | Action<{}>
  | Action<IQuestion[]>
  | Action<IDisaptchError>;
