import _ from "lodash";

const users = (state, payload) => ({ ...state, ..._.mapKeys(payload, "_id") });
//const error = errorObject => ({});

export { users };
