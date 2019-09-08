import { combineEpics } from "redux-observable";
import usersEpic from "./usersEpic";

export default combineEpics(usersEpic);
