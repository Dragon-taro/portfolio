import { combineReducers } from "redux";
import { contactReducer } from "./contact/reducer";
import { newQuestionReducer } from "./newQuestion/reducer";
import { QuestionsReducer } from "./questions/reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  newQuestion: newQuestionReducer,
  questions: QuestionsReducer
});

export default rootReducer;
