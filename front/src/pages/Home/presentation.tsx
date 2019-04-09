import * as React from "react";
import * as styles from "./style.css";
import { Props } from "./types";
import TopContent from "../../components/blocks/TopContent";
import Table, { ITable } from "../../components/parts/Table";
import LikeCard from "../../components/blocks/LikeCard";
import OneColmun from "../../components/layouts/OneColmun";
import { H2 } from "../../components/parts/Heading";
import QuestionsList from "../../components/blocks/QuestionsList";
import { Link } from "react-router-dom";
import Button from "../../components/parts/Button";

const items: ITable = {
  items: [
    { th: "2017/5~2018/7", td: "activo" },
    { th: "2018/8", td: "Voyage Group (Treasure)" },
    { th: "2018/9", td: "freee" },
    { th: "2018/12", td: "Voyage Group (Sunrise)" },
    { th: "2018/2", td: "CyberAgent" }
  ]
};

export default class Home extends React.Component<Props> {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { questions = [] } = this.props;
    return (
      <main>
        <TopContent />
        <OneColmun>
          <H2>LIKES</H2>
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
        </OneColmun>

        <OneColmun>
          <H2>Questions</H2>
          <p>
            最近の僕に対する質問です。クリックすると僕の回答がみられます。下のNew
            Questionより僕への新しい質問を作成することができます。
          </p>
          <QuestionsList questions={questions.slice(0, 3)} />
          <div className={styles.moreQuestions}>
            <Link to="/questions">More Questions→</Link>
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/questions/new">
              <Button big>New Question</Button>
            </Link>
          </div>
        </OneColmun>

        <OneColmun>
          <H2>CAREER</H2>
          <Table {...items} />
        </OneColmun>

        <OneColmun>
          <H2>CONTACT</H2>
          <p>
            お仕事の依頼やその他飲み会のお誘いなどは以下のページよりよろしくお願いいたします。
            直接TwitterのDMよりご連絡いただいても大丈夫です。
          </p>
          <div className={styles.buttonWrapper}>
            <Link to="/contact">
              <Button big>Contact</Button>
            </Link>
          </div>
        </OneColmun>
      </main>
    );
  }
}
