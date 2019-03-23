import * as React from "react";
import * as styles from "./style.css";
import { IFormElement } from "../types";
import { randomStr } from "../utils";

const Textarea: React.FunctionComponent<IFormElement<HTMLTextAreaElement>> = ({
  className,
  forId = randomStr(8),
  label,
  ...props
}) => (
  <div className={className}>
    <label className={styles.label} htmlFor={forId}>
      {label}
    </label>
    <textarea id={forId} {...props} className={styles.textarea} />
  </div>
);

export default Textarea;
