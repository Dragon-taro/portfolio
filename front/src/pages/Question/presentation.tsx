import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import QuestionCard from "../../components/blocks/QuestionCard";
import OneColmun from "../../components/layouts/OneColmun";

export default class Question extends React.Component<Props> {
  componentDidMount() {
    const {
      getQuestion,
      getAnswer,
      match: {
        params: { id }
      }
    } = this.props;
    getQuestion(id);
    getAnswer(id);
  }

  render() {
    const { question, answer } = this.props;
    const { question: q } = question;

    return (
      <div className={styles.questions}>
        <OneColmun>
          <h1>Question</h1>
          {!question.error && q ? (
            <React.Fragment>
              <QuestionCard
                key={q.id}
                createdAt={q.createdAt}
                className={styles.quetionCard}
              >
                {q.text}
              </QuestionCard>
              <h2>Answer</h2>
              <p>{answer.text || "まだ回答がありません。"}</p>
            </React.Fragment>
          ) : (
            "質問が見つかりませんでした。"
          )}
        </OneColmun>
      </div>
    );
  }
}
