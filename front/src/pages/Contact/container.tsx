import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../types/root";
import { ISetContact, IContact } from "../../types/contact";
import { Action } from "../../types/utils";
import { setContact, postContact } from "../../redux/contact/actions";

import Contact from "./presentation";

const mapStateToProps = (state: RootState) => ({
  contact: state.contact
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<ISetContact> | Action<IContact>>
) => ({
  setContact: (payload: ISetContact) => {
    dispatch(setContact(payload));
  },
  postContact: (payload: IContact) => {
    dispatch(postContact(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
