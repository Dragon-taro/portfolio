import * as React from "react";
import * as ReactDOM from "react-dom";
import TopContent from "../components/blocks/TopContent";

const App: React.FunctionComponent = () => (
  <div>
    <TopContent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
