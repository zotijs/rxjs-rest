import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { userReducer } from "./userReducer";
import { usersErrorReducer } from "./usersErrorReducer";

export default combineReducers({
  users: usersReducer,
  user: userReducer,
  usersErrors: usersErrorReducer
});
