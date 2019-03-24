import * as React from "react";
import * as styles from "./style.css";

interface IButton {
  onClick?(): void;
}

const Button: React.SFC<IButton> = ({ children, ...props }) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;
