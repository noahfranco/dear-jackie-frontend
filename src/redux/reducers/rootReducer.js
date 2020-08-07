import { combineReducers } from "redux";
// import reducer components here
import makeMemoriesReduer from "./makeMemoriesReducer";

const rootReducer = combineReducers({
  // enter components here
  data: makeMemoriesReduer,
});

export default rootReducer;
