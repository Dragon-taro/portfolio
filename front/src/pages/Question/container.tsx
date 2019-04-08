import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { Action } from "../../types/utils";

import Questoin from "./presentation";
import { getQuestion } from "../../redux/question/actions";

const mapStateToProps = (state: RootState) => ({
  question: state.question
});

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => ({
  getQuestion: (id: string) => {
    dispatch(getQuestion(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questoin);
