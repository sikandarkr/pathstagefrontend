import counterReducer from "./counterReducer";
import profileReducer from "./DashboardReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  profiles: profileReducer
});

export default rootReducer;
