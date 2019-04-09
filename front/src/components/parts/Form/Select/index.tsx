import * as React from "react";
import * as styles from "./style.css";
import { ISelectFiled } from "../types";
import { randomStr } from "../utils";
import Label from "../Label";

const Select: React.FunctionComponent<ISelectFiled<HTMLSelectElement>> = ({
  className,
  options,
  forId = randomStr(8),
  label,
  required = false,
  ...props
}) => (
  <div className={className}>
    <Label forId={forId} requierd={required}>
      {label}
    </Label>
    <select id={forId} {...props} className={styles.select}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
