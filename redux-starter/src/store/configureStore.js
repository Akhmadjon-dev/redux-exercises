// import { applyMiddleware, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bug";
import {
  configureStore,
  createReducer,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "./middleware";

const store = createStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger("logger hello")],
});

// const store = createStore(
//   reducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   devToolsEnhancer({ trace: true })
// );

export default store;
