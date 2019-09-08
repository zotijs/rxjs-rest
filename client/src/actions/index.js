import {
  FETCH_USERS,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED
} from "./types";

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
