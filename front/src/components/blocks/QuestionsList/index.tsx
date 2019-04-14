import * as React from "react";
import * as styles from "./style.css";
import { IQuestion } from "../../../types/question";
import { Link } from "react-router-dom";
import QuestionCard from "../QuestionCard";
import getQueryString from "../../../utils/getQueryString";
import ReactPaginate from "react-paginate";

export interface ILikeCard {
  questions: IQuestion[];
  className?: string;
  totalPage?: number;
  currentPage?: number;
  isPaging?: boolean;
  onPageChange?: (selectedItem: { selected: number }) => void;
}

const QuestionsList: React.SFC<ILikeCard> = ({
  questions,
  className,
  isPaging,
  currentPage,
  totalPage,
  onPageChange
}) => {
  const query = getQueryString();

  return (
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
      {isPaging && totalPage && onPageChange && (
        <ReactPaginate
          pageCount={totalPage}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default QuestionsList;
