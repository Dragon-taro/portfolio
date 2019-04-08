import * as React from "react";
import * as styles from "./style.css";
import * as moment from "moment";
import Card from "../../parts/Card";

export interface IQuestionCard {
  createdAt?: string;
  className?: string;
}

const QuestionCard: React.SFC<IQuestionCard> = ({
  createdAt,
  className,
  children
}) => (
  <Card className={[styles.questionCard, className].join(" ")}>
    {children}
    {createdAt && (
      <div className={styles.tag}>
        {moment(createdAt).format("YYYY.MM.DD hh:mm:ss")}
      </div>
    )}
  </Card>
);

export default QuestionCard;
