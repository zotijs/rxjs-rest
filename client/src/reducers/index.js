import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { usersErrorReducer } from "./usersErrorReducer";

export default combineReducers({
  users: usersReducer,
  usersErrors: usersErrorReducer
});
