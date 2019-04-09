import * as React from "react";
import * as styles from "./style.css";
import { IFormElement } from "../types";
import { randomStr } from "../utils";
import Label from "../Label";

const Textarea: React.FunctionComponent<IFormElement<HTMLTextAreaElement>> = ({
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
    <textarea id={forId} {...props} className={styles.textarea} />
  </div>
);

export default Textarea;
