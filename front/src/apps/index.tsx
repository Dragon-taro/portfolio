import * as React from "react";
import * as ReactDOM from "react-dom";
import ContactContainer from "../pages/Contact/container";
import Footer from "../components/blocks/Footer";
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";

const store = configureStore();

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <React.Fragment>
      <ContactContainer />
      <Footer />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
