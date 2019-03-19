import * as React from "react";
import * as styles from "./style.css";
import { ITextFiled } from "../types";

const Textarea: React.FunctionComponent<ITextFiled<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => (
  <textarea {...props} className={[styles.textarea, className].join(" ")} />
);

export default Textarea;
