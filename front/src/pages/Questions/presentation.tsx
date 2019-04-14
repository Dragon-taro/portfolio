import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import OneColmun from "../../components/layouts/OneColmun";
import QuestionsList from "../../components/blocks/QuestionsList";
import getQueryString from "../../utils/getQueryString";

export default class Questoins extends React.Component<Props> {
  componentDidMount() {
    const { getQuestions } = this.props;
    const query = getQueryString();
    const page = query.page ? Number(query.page) : 0;
    getQuestions({ page });
  }

  handlePageChange(e: { selected: number }) {
    const { getQuestions } = this.props;
    const { selected } = e;

    getQuestions({ page: selected });
  }

  render() {
    const { questions = [], totalPage } = this.props;

    return (
      <div className={styles.questions}>
        <OneColmun>
          <h1>Questions</h1>
          <QuestionsList
            questions={questions}
            totalPage={totalPage}
            isPaging={true}
            onPageChange={e => this.handlePageChange(e)}
          />
        </OneColmun>
      </div>
    );
  }
}
