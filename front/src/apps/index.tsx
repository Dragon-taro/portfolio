import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../pages/Home";

const App: React.FunctionComponent = () => (
  <div>
    <Home />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
