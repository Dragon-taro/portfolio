import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import QuestionCard from "../../components/blocks/QuestionCard";
import OneColmun from "../../components/layouts/OneColmun";

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
          {questions.map(
            q =>
              q.text && (
                <QuestionCard
                  key={q.id}
                  createdAt={q.createdAt}
                  className={styles.quetionCard}
                >
                  {q.text}
                </QuestionCard>
              )
          )}
        </OneColmun>
      </div>
    );
  }
}
