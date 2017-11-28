import {createStore, combineReducers, applyMiddleware} from "redux";
import { createLogger}  from "redux-logger";
import numberReducer from "./Reducers/numberReducer";
import userReducer from "./Reducers/userReducer";
//here I am combining two reducers,because store accepts only one reducer argument
//also implemeted the use of middleware
const loggerMiddleware =createLogger();

//we can just make a default export
export default createStore(combineReducers(
    // {number, user}),applyMiddleware(loggerMiddleware));
    {number:numberReducer, user:userReducer}),applyMiddleware(loggerMiddleware));