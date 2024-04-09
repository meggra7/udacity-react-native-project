import { combineReducers } from "redux";
import regionsReducer from "./reducers/regionsReducer";

const rootReducer = combineReducers({
  regionsReducer,
});

export default rootReducer;
