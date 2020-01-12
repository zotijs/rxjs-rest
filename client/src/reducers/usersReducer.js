import _ from "lodash";
import {
  FETCH_USERS,
  FETCH_USERS_FULFILLED,
  FETCH_USER,
  FETCH_USER_FULFILLED,
  DELETE_USER,
  DELETE_USER_FULFILLED
} from "../actions/types";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
    case FETCH_USER:
      return {};
    case DELETE_USER:
      return state; //need state for the omit function in DELETE_USER_FULFILLED
    case FETCH_USERS_FULFILLED:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_USER_FULFILLED:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_USER_FULFILLED:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
