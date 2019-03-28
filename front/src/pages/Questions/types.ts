import { IQuestions } from "../../types/question";

export interface Props {
  questions: IQuestions;
  getQuestions: () => void;
}
