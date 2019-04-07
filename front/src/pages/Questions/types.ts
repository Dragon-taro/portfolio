import { IQuestions } from "../../types/question";

export interface Props extends IQuestions {
  getQuestions: () => void;
}
