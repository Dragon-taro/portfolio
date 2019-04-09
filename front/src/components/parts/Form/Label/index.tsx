import * as React from "react";
import * as styles from "./style.css";

interface ILabel {
  forId: string;
  requierd: boolean;
}

const Label: React.FunctionComponent<ILabel> = ({
  forId,
  children,
  requierd
}) => (
  <label className={styles.label} htmlFor={forId}>
    {children}
    {requierd && <span>*必須</span>}
  </label>
);

export default Label;
