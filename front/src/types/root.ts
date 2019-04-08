import { IContact } from "./contact";
import { IQuestion, IQuestions } from "./question";

export interface RootState {
  contact: IContact;
  newQuestion: IQuestion;
  questions: IQuestions;
  question: IQuestion;
}
