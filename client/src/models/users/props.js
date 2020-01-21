import _ from "lodash";

//state
const users = (state, payload) => ({ ...state, ..._.mapKeys(payload, "_id") });
const afterUserDeleted = (state, payload) => _.omit(state, payload);
//const error = errorObject => ({});

//state selectors
const usersSelector = ({ usersReducer }) =>
  usersReducer && Object.values(usersReducer);

export { users, usersSelector, afterUserDeleted };
