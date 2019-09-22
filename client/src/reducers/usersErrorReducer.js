import {
  FETCH_USERS,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED
} from "../actions/types";

export const usersErrorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USERS:
    case FETCH_USERS_FULFILLED:
    case FETCH_USER:
    case FETCH_USER_FULFILLED:
      return null;
    case FETCH_USERS_REJECTED:
    case FETCH_USER_REJECTED:
      return action.payload;
    default:
      return state;
  }
};
