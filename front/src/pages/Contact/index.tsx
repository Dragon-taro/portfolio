import * as React from "react";
import * as styles from "./style.css";
import { RootState } from "../../types/root";
import { IContact, ISetContact } from "../../types/contact";
import { Dispatch } from "redux";
import { Action } from "../../types/utils";
import { setContact } from "../../redux/contact/actions";
import { connect } from "react-redux";

interface Props {
  contact: IContact;
  actions?: {
    setContact: (dispatch: Dispatch<Action<ISetContact>>) => void;
  };
}

const mapStateToProps = (state: RootState) => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ISetContact>>) => ({
  setContact: (payload: ISetContact) => {
    dispatch(setContact(payload));
  }
});

class Contact extends React.Component<Props> {
  render() {
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
