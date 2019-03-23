import * as React from "react";
import * as styles from "./style.css";
import { ISelectFiled } from "../types";

const Select: React.FunctionComponent<ISelectFiled<HTMLSelectElement>> = ({
  className,
  options,
  ...props
}) => (
  <select {...props} className={[styles.select, className].join(" ")}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
