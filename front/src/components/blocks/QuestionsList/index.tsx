import * as React from "react";
import * as styles from "./style.css";
import { IQuestion } from "../../../types/question";
import { Link } from "react-router-dom";
import QuestionCard from "../QuestionCard";

export interface ILikeCard {
  questions: IQuestion[];
  className?: string;
}

const QuestionsList: React.SFC<ILikeCard> = ({ questions, className }) => (
  <div className={[styles.questionsList, className].join(" ")}>
    {questions.map(
      q =>
        q.text && (
          <Link to={`/questions/${q.id}`} key={q.id}>
            <QuestionCard
              createdAt={q.createdAt}
              className={styles.questionCard}
            >
              {q.text}
            </QuestionCard>
          </Link>
        )
    )}
  </div>
);

export default QuestionsList;
