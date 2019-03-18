import * as React from "react";
import * as styles from "./style.css";

interface ICard {
  className?: string;
}

const Card: React.SFC<ICard> = ({ className, children }) => (
  <div className={[styles.card, className].join(" ")}>{children}</div>
);

export default Card;
