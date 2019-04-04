import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import App from "./components/App/App";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render(App);
