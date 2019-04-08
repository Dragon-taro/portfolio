import { IQuestion, ISetQuestion } from "../../types/question";

export interface Props {
  question: IQuestion;
  setQuestion: (payload: ISetQuestion) => void;
  postQuestion: (payload: IQuestion) => void;
}
