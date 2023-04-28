
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {}, // default state
    applyMiddleware(thunk) // thos alows use async dispatch function
)
