import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer.js";
// import {composeWithDevTools} from "redux-devtools-extension";

//! con dev-tools
//? export const store = createStore(
//?     rootReducer,
//?     composeWithDevTools(applyMiddleware(thunk))
//? );

//! sin dev-tools
export const store = createStore(rootReducer, applyMiddleware(thunk));
