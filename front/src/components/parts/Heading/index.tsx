import * as React from "react";
import * as styles from "./style.css";

interface IHeading {
  className?: string;
}

export const H1: React.SFC<IHeading> = ({ className, children }) => {
  return <h1 className={[styles.heading, className].join(" ")}>{children}</h1>;
};

export const H2: React.SFC<IHeading> = ({ className, children }) => {
  return <h2 className={[styles.heading, className].join(" ")}>{children}</h2>;
};

export const H3: React.SFC<IHeading> = ({ className, children }) => {
  return <h3 className={[styles.heading, className].join(" ")}>{children}</h3>;
};
