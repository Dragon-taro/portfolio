import * as React from "react";
import * as styles from "./style.css";
import { IFormElement } from "../types";
import { randomStr } from "../utils";
import Label from "../Label";

const Input: React.FunctionComponent<IFormElement<HTMLInputElement>> = ({
  className,
  forId = randomStr(8),
  label,
  required = false,
  ...props
}) => (
  <div className={className}>
    <Label forId={forId} requierd={required}>
      {label}
    </Label>
    <input id={forId} type="text" {...props} className={styles.input} />
  </div>
);

export default Input;
