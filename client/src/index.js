import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "components/app/App";
import ModelProvider from "libraries/ModelProvider";
import { epics as usersEpics, reducer as usersReducer } from "models/users";
import { epics as userEpic, reducer as userReducer } from "models/user";

const { fetchUsersEpic, deleteUserEpic } = usersEpics;

const epicsList = [userEpic, fetchUsersEpic, deleteUserEpic];
const reducersList = [usersReducer, userReducer];

ReactDOM.render(
  <ModelProvider epics={epicsList} reducers={reducersList}>
    <App />
  </ModelProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
