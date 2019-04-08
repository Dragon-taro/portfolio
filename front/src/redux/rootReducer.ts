import { combineReducers } from "redux";
import { contactReducer } from "./contact/reducer";
import { newQuestionReducer } from "./newQuestion/reducer";
import { QuestionsReducer } from "./questions/reducer";
import { QuestionReducer } from "./question/reducer";
import { AnswerReducer } from "./answer/reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  newQuestion: newQuestionReducer,
  questions: QuestionsReducer,
  question: QuestionReducer,
  answer: AnswerReducer
});

export default rootReducer;
