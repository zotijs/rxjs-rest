import { combineReducers } from "redux";
import { usersReducer, usersErrorReducer } from "./usersReducer";

export default combineReducers({
  users: usersReducer,
  usersErrors: usersErrorReducer
});
