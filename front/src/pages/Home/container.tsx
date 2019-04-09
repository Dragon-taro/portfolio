import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { Action } from "../../types/utils";

import Home from "./presentation";
import { getQuestions } from "../../redux/questions/actions";

const mapStateToProps = (state: RootState) => ({
  ...state.questions
});

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => ({
  getQuestions: () => {
    dispatch(getQuestions());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
