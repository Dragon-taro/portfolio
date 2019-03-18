import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../pages/Home";
import Footer from "../components/blocks/Footer";

const App: React.FunctionComponent = () => (
  <div>
    <Home />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
