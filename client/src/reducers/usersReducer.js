import _ from "lodash";
import { FETCH_USERS, FETCH_USERS_FULFILLED } from "../actions/types";

export const usersReducer = (state = {}, action) => {
  if (action.type === FETCH_USERS) return {};
  if (action.type === FETCH_USERS_FULFILLED)
    return { ...state, ..._.mapKeys(action.payload, "_id") };

  return state;
};
