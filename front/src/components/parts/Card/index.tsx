import * as React from "react";
import * as styles from "./style.css";

const Card: React.SFC = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
