import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import QuestionCard from "../../components/blocks/QuestionCard";
import OneColmun from "../../components/layouts/OneColmun";

export default class Question extends React.Component<Props> {
  componentDidMount() {
    const {
      getQuestion,
      match: {
        params: { id }
      }
    } = this.props;
    getQuestion(id);
  }

  render() {
    const { question } = this.props;

    return (
      <div className={styles.questions}>
        <OneColmun>
          <h1>Questions</h1>
          <QuestionCard
            key={question.id}
            createdAt={question.createdAt}
            className={styles.quetionCard}
          />
        </OneColmun>
      </div>
    );
  }
}
