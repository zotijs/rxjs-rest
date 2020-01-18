import { actionCreator } from "libraries/model/";

const CMP = "USERS";

const fetchUsers = actionCreator(`FETCH_${CMP}`);
const fetchUsersFulfilled = actionCreator(`FETCH_${CMP}_FULFILLED`);
const fetchUsersRejected = actionCreator(`FETCH_${CMP}_REJECTED`);

export { fetchUsers, fetchUsersFulfilled, fetchUsersRejected };
