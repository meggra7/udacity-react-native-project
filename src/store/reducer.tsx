import { combineReducers } from "redux";
import regionsReducer from "./reducers/regionsReducer";
import customersReducer from "./reducers/customersReducer";

const rootReducer = combineReducers({
  customersReducer,
  regionsReducer,
});

export default rootReducer;
