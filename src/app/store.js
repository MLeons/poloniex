import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";


import ticker from "./reducers/tickerReducer";

export default createStore(
    combineReducers({
        ticker
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);