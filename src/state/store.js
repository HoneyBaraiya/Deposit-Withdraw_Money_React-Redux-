import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/index";
import thunk from "redux-thunk";

//createstore(reducer,initial state, middleware)

 
export const store=createStore(reducer,{},applyMiddleware(thunk))