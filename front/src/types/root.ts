import { IContact } from "./contact";
import { IQuestion } from "./question";

export interface RootState {
  contact: IContact;
  newQuestion: IQuestion;
}
