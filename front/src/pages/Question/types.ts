import { IQuestion } from "../../types/question";
import { RouteComponentProps } from "react-router";
import { IAnswer } from "../../types/answer";

export interface Props extends RouteComponentProps<{ id: string }> {
  question: IQuestion;
  answer: IAnswer;
  getQuestion: (id: string) => void;
  getAnswer: (questionId: string) => void;
}
