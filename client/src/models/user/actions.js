import { actionCreator } from "libraries/model/";

const CMP = "USER";

const fetchUser = actionCreator(`FETCH_${CMP}`);
const fetchUserFulfilled = actionCreator(`FETCH_${CMP}_FULFILLED`);
const fetchUserRejected = actionCreator(`FETCH_${CMP}_REJECTED`);

export { fetchUser, fetchUserFulfilled, fetchUserRejected };
