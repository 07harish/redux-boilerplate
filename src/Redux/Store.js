import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./Reducer";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
const navMiddleware = routerMiddleware(history);
const store = createStore(
  createRootReducer(history),
  applyMiddleware(thunk, navMiddleware)
);

export default store;
