import { IQuestion } from "../../types/question";
import { RouteComponentProps } from "react-router";

export interface Props extends RouteComponentProps<{ id: string }> {
  question: IQuestion;
  getQuestion: (id: string) => void;
}
