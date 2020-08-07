import { combineReducers } from "redux";
// import reducer components here
import makeMemoriesReduer from "./makeMemoriesReducer.js";
import viewDataReducer from "./viewDataReducer.js";

const rootReducer = combineReducers({
  // enter components here
  data: makeMemoriesReduer,
  card: viewDataReducer,
});

export default rootReducer;
