import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { ISetContact } from "../../types/contact";
import { Action } from "../../types/utils";
import { setContact } from "../../redux/contact/actions";

import Contact from "./presentation";

const mapStateToProps = (state: RootState) => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ISetContact>>) => ({
  setContact: (payload: ISetContact) => {
    dispatch(setContact(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
