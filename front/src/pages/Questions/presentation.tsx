import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import OneColmun from "../../components/layouts/OneColmun";
import QuestionsList from "../../components/blocks/QuestionsList";

export default class Questoins extends React.Component<Props> {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { questions = [] } = this.props;

    return (
      <div className={styles.questions}>
        <OneColmun>
          <h1>Questions</h1>
          <QuestionsList questions={questions} />
        </OneColmun>
      </div>
    );
  }
}
