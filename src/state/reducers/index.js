import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";

const reducers = combineReducers({
  users: userReducer,
  items: itemReducer,
});

export default reducers;
