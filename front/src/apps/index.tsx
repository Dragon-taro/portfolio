import * as React from "react";
import * as ReactDOM from "react-dom";
import ContactContainer from "../pages/Contact/container";
import Footer from "../components/blocks/Footer";
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import Home from "../pages/Home";

const history = createBrowserHistory();
const store = configureStore(history);

const App: React.FunctionComponent = () => (
  <Router history={history}>
    <Provider store={store}>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactContainer} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Provider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
