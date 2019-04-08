import * as React from "react";
import * as styles from "./style.css";
import OneColmun from "../../components/layouts/OneColmun";
import { Link } from "react-router-dom";
import Button from "../../components/parts/Button";

const ThanksContact: React.FunctionComponent = () => (
  <div className={styles.thanks}>
    <OneColmun>
      <h1>お問い合わせありがとうございます！</h1>
      <p>
        ご指定いただいた連絡先にこちらより折り返しご連絡させていただきます。
        <br />
        <div className={styles.buttonWrapper}>
          <Link to="/">
            <Button>Topに戻る</Button>
          </Link>
        </div>
      </p>
    </OneColmun>
  </div>
);

export default ThanksContact;
