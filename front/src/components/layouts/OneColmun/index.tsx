import * as React from "react";
import * as styles from "./style.css";

interface IOneColmun {
  className?: string;
}

const OneColmun: React.SFC<IOneColmun> = ({ className, children }) => (
  <div className={[styles.oneColumn, className].join(" ")}>{children}</div>
);

export default OneColmun;
