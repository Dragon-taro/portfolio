import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import Textarea from "../../components/parts/Form/TextArea";
import Button from "../../components/parts/Button";
import { ISetQuestion } from "../../types/question";
import OneColmun from "../../components/layouts/OneColmun";

export default class NewQuestion extends React.Component<Props> {
  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { setQuestion } = this.props;
    const changeValue: ISetQuestion = {
      text: e.target.value
    };

    setQuestion(changeValue);
  }

  handleSubmit() {
    const { postQuestion, question } = this.props;
    postQuestion(question);
  }

  render() {
    const {
      question: { text }
    } = this.props;
    const isInvalid = !text.trim() && text.length < 140;

    return (
      <div className={styles.question}>
        <OneColmun>
          <h1 className={styles.title}>New Questions</h1>
          <p>
            僕に何か質問がある方は以下のフォームから質問を投稿してください！
          </p>
          <Textarea
            value={text}
            className={styles.field}
            onChange={e => this.handleChange(e)}
            name="text"
          />
          <div className={styles.button}>
            <Button
              big
              disabled={isInvalid}
              onClick={() => this.handleSubmit()}
            >
              質問する
            </Button>
          </div>
        </OneColmun>
      </div>
    );
  }
}
