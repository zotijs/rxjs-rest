import { combineEpics } from "redux-observable";
import usersEpic from "./usersEpic";
import userEpic from "./userEpic";
import deleteUserEpic from "./deleteUserEpic";

export default combineEpics(usersEpic, userEpic, deleteUserEpic);
