import * as React from "react";
import * as styles from "./style.css";
import SNSLinks from "../../parts/SNSLinks";

const Footer: React.SFC = () => (
  <footer className={styles.footer}>
    <SNSLinks />
    <p>© Ryotaro Miyagawa 2018</p>
  </footer>
);

export default Footer;
