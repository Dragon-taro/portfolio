import { IQuestions, IGetQuestions } from "../../types/question";

export interface Props extends IQuestions {
  getQuestions: (payload?: IGetQuestions) => void;
}
