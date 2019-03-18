import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../components/parts/Button";

const App: React.FunctionComponent = () => (
  <div>
    <Button>ボタン</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
