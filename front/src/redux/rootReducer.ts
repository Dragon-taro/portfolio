import { combineReducers } from "redux";
import { contactReducer } from "./contact/reducer";
import { newQuestionReducer } from "./newQuestion/reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  newQuestion: newQuestionReducer
});

export default rootReducer;
