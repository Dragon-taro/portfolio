import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
}
