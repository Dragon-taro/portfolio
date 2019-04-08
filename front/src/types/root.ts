import { IContact } from "./contact";
import { IQuestion, IQuestions } from "./question";
import { IAnswer } from "./answer";

export interface RootState {
  contact: IContact;
  newQuestion: IQuestion;
  questions: IQuestions;
  question: IQuestion;
  answer: IAnswer;
}
