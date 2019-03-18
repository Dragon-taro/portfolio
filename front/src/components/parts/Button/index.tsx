import * as React from "react";
import * as styles from "./style.css";

const Button: React.SFC = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default Button;
