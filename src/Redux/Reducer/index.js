import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { AuthReducer } from "./AuthReducer";

const rootReducer = history =>
  combineReducers({
    AuthReducer,
    router: connectRouter(history)
  });

export default rootReducer;
