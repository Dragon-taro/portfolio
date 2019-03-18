import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "../components/parts/Card";

const App: React.FunctionComponent = () => (
  <div>
    <Card>カード</Card>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
