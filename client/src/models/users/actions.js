import { actionCreator } from "libraries/model/";

const CMP = "USERS";

const fetchUsers = actionCreator(`FETCH_${CMP}`);
const fetchUsersFulfilled = actionCreator(`FETCH_${CMP}_FULFILLED`);
const fetchUsersRejected = actionCreator(`FETCH_${CMP}_REJECTED`);

const deleteUser = actionCreator("DELETE_USER");
const deleteUserFulfilled = actionCreator("DELETE_USER_FULFILLED");
const deleteUserRejected = actionCreator("DELETE_USER_REJECTED");

export {
  fetchUsers,
  fetchUsersFulfilled,
  fetchUsersRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
};
