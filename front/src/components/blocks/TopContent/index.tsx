import * as React from "react";
import * as styles from "./style.css";
import SNSLinks from "../../parts/SNSLinks";

const TopContent: React.SFC = () => (
  <section className={styles.topContent}>
    <div className={styles.imgBox}>
      <img src="" alt="" />
    </div>
    <div className={styles.profile}>
      <div>
        <p>Kyoto University</p>
        <p>Frontend Engineer</p>
        <div className={styles.name}>
          <h1>宮川 竜太朗</h1>
          <p>Ryotaro Miyagawa</p>
        </div>
        <SNSLinks />
      </div>
    </div>
  </section>
);

export default TopContent;
