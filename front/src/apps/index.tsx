import * as React from "react";
import * as ReactDOM from "react-dom";
import TopContent from "../components/blocks/TopContent";
import Table, { ITable } from "../components/parts/Table";

const items: ITable = {
  items: [
    { th: "2017/5~2018/7", td: "activo" },
    { th: "2018/8", td: "Voyage Group (Treasure)" },
    { th: "2018/9", td: "freee" },
    { th: "2018/12", td: "Voyage Group (Sunrise)" },
    { th: "2018/2", td: "CyberAgent" }
  ]
};

const App: React.FunctionComponent = () => (
  <div>
    <TopContent />
    <div style={{ width: "800px", margin: "0 auto" }}>
      <Table {...items} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
