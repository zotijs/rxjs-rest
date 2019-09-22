import {
  FETCH_USERS,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED
} from "./types";

//fetch users
export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersFulfilled = payload => ({
  type: FETCH_USERS_FULFILLED,
  payload
});
export const fetchUsersRejected = payload => ({
  type: FETCH_USERS_REJECTED,
  payload,
  error: true
});

//fetch user
export const fetchUser = id => ({ type: FETCH_USER, payload: id });
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload
});
export const fetchUserRejected = payload => ({
  type: FETCH_USER_REJECTED,
  payload,
  error: true
});
