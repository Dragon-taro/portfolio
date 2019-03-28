import { Action } from "../../types/utils";
import { SET_QUESTION } from "./constants";
import { IQuestion, ISetQuestion } from "../../types/question";

const initState: IQuestion = {
  text: ""
};

export const newQuestionReducer = (
  state: IQuestion = initState,
  action: Action<ISetQuestion>
): IQuestion => {
  switch (action.type) {
    case SET_QUESTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
