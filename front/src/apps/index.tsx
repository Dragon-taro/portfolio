import * as React from "react";
import * as ReactDOM from "react-dom";
import ContactContainer from "../pages/Contact/container";
import Footer from "../components/blocks/Footer";
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import HomeContainer from "../pages/Home/container";
import NewQuestionContainer from "../pages/NewQuestion/container";
import QuestionsContainer from "../pages/Questions/container";
import QuestoinContainer from "../pages/Question/container";
import ThanksContact from "../pages/ThanksContact";

const history = createBrowserHistory();
const store = configureStore(history);

const App: React.FunctionComponent = () => (
  <Router history={history}>
    <Provider store={store}>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/contact/thanks" component={ThanksContact} />
          <Route exact path="/questions/new" component={NewQuestionContainer} />
          <Route exact path="/questions" component={QuestionsContainer} />
          <Route exact path="/questions/:id" component={QuestoinContainer} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Provider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
