import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";

export default class Questoins extends React.Component<Props> {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    return <div>questions!</div>;
  }
}
