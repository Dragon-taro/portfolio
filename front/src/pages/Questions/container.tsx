import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { Action } from "../../types/utils";

import Questoins from "./presentation";
import { getQuestions } from "../../redux/questions/actions";
import { IGetQuestions } from "../../types/question";

const mapStateToProps = (state: RootState) => ({
  ...state.questions
});

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => ({
  getQuestions: (payload?: IGetQuestions) => {
    dispatch(getQuestions(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questoins);
