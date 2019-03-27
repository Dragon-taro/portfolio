import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { Action } from "../../types/utils";

import NewQuestion from "./presentation";
import { ISetQuestion, IQuestion } from "../../types/question";
import { setQuestion, postQuestion } from "../../redux/question/actions";

const mapStateToProps = (state: RootState) => ({
  question: state.question
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<ISetQuestion> | Action<IQuestion>>
) => ({
  setQuestion: (payload: ISetQuestion) => {
    dispatch(setQuestion(payload));
  },
  postQuestion: (payload: IQuestion) => {
    dispatch(postQuestion(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
