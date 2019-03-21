import * as React from "react";
import * as ReactDOM from "react-dom";
import Contact from "../pages/Contact";
import Footer from "../components/blocks/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";

const store = createStore(rootReducer);

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <React.Fragment>
      <Contact />
      <Footer />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
