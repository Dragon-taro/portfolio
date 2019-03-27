import { combineReducers } from "redux";
import { contactReducer } from "./contact/reducer";
import { questionReducer } from "./question/reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  question: questionReducer
});

export default rootReducer;
