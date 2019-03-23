import * as React from "react";
import * as styles from "./style.css";
import { IFormElement } from "../types";
import { randomStr } from "../utils";

const Input: React.FunctionComponent<IFormElement<HTMLInputElement>> = ({
  className,
  forId = randomStr(8),
  label,
  ...props
}) => (
  <div className={className}>
    <label className={styles.label} htmlFor={forId}>
      {label}
    </label>
    <input id={forId} type="text" {...props} className={styles.input} />
  </div>
);

export default Input;
