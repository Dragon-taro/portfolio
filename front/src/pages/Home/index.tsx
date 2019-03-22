import * as React from "react";
import * as styles from "./style.css";
import TopContent from "../../components/blocks/TopContent";
import Table, { ITable } from "../../components/parts/Table";
import LikeCard from "../../components/blocks/LikeCard";

const items: ITable = {
  items: [
    { th: "2017/5~2018/7", td: "activo" },
    { th: "2018/8", td: "Voyage Group (Treasure)" },
    { th: "2018/9", td: "freee" },
    { th: "2018/12", td: "Voyage Group (Sunrise)" },
    { th: "2018/2", td: "CyberAgent" }
  ]
};

const Home: React.FunctionComponent = () => (
  <main>
    <TopContent />
    <section className={styles.wrapper}>
      <h2 className={styles.h2}>LIKES</h2>
      <div className={styles.linkCardWrapper}>
        <LikeCard
          title="PRGRAMING"
          buttonContent="Go To GitHub"
          className={styles.linkCard}
        >
          <ul>
            <li>Frontend(react, redux...)</li>
            <li>Backend(golang, node, rails...)</li>
            <li>Infla(docker, nginx...)</li>
          </ul>
        </LikeCard>
        <LikeCard
          title="ALCOHOL"
          buttonContent="Drinking With Me"
          className={styles.linkCard}
        >
          <ul>
            <li>Beer(Premium Molts, First Press)</li>
            <li>Whisky(Scotch, Highball)</li>
            <li>Japanese Sake</li>
          </ul>
        </LikeCard>
        <LikeCard
          title="GIRLS"
          buttonContent="Send Message"
          className={styles.linkCard}
        >
          <ul>
            <li>Cute</li>
            <li>Like talking</li>
            <li>Frinedly</li>
          </ul>
        </LikeCard>
        <div className={styles.linkCard} role="none" />
      </div>
    </section>

    <section className={styles.wrapper}>
      <h2 className={styles.h2}>HISTORY</h2>
      <Table {...items} />
    </section>
  </main>
);

export default Home;
