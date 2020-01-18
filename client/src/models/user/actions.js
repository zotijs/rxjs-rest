import { actionCreator } from "libraries/model/";

const CMP = "USER";

const fetchUser = actionCreator(`FETCH_${CMP}`);
const fetchUserFulfilled = actionCreator(`FETCH_${CMP}_FULFILLED`);
const fetchUserRejected = actionCreator(`FETCH_${CMP}_REJECTED`);

const deleteUser = actionCreator(`DELETE_${CMP}`);
const deleteUserFulfilled = actionCreator(`DELETE_${CMP}_FULFILLED`);
const deleteUserRejected = actionCreator(`DELETE_${CMP}_REJECTED`);

export {
  fetchUser,
  fetchUserFulfilled,
  fetchUserRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
};
