import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { History } from "history";

export function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga, history);
  return store;
}
