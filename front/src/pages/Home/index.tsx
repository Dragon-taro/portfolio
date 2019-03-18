import * as React from "react";
import * as styles from "./style.css";
import TopContent from "../../components/blocks/TopContent";
import Table, { ITable } from "../../components/parts/Table";

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
      <h2>HISTORY</h2>
      <Table {...items} />
    </section>
  </main>
);

export default Home;
