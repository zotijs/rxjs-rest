import { combineEpics } from "redux-observable";
import usersEpic from "./usersEpic";
import userEpic from "./userEpic";

export default combineEpics(usersEpic, userEpic);
