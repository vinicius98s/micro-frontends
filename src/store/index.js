import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

const logger = store => next => action => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};

export default createStore(reducers, applyMiddleware(logger));
