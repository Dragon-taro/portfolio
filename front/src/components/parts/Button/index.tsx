import * as React from "react";
import * as styles from "./style.css";

interface IButton {
  onClick?(): void;
  big?: boolean;
}

const Button: React.SFC<IButton> = ({ children, big, ...props }) => (
  <button
    {...props}
    className={[styles.button, big ? styles.big : ""].join(" ")}
  >
    {children}
  </button>
);

export default Button;
