import _ from "lodash";
import {
  FETCH_USERS,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED
} from "../actions/types";

export const usersReducer = (state = {}, action) => {
  if (action.type === FETCH_USERS) return {};
  if (action.type === FETCH_USERS_FULFILLED)
    return { ...state, ..._.mapKeys(action.payload, "_id") };

  return state;
};

export const usersErrorReducer = (state = null, action) => {
  if (action.type === FETCH_USERS) return null;
  if (action.type === FETCH_USERS_FULFILLED) return null;
  if (action.type === FETCH_USERS_REJECTED) return action.payload;

  return state;
};
