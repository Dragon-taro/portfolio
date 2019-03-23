import * as React from "react";
import * as styles from "./style.css";
import { ISelectFiled } from "../types";
import { randomStr } from "../utils";

const Select: React.FunctionComponent<ISelectFiled<HTMLSelectElement>> = ({
  className,
  options,
  forId = randomStr(8),
  label,
  ...props
}) => (
  <div className={className}>
    <label className={styles.label} htmlFor={forId}>
      {label}
    </label>
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
