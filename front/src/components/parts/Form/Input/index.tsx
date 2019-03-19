import * as React from "react";
import * as styles from "./style.css";
import { ITextFiled } from "../types";

const Input: React.FunctionComponent<ITextFiled<HTMLInputElement>> = ({
  className,
  ...props
}) => (
  <input
    type="text"
    {...props}
    className={[styles.input, className].join(" ")}
  />
);

export default Input;
