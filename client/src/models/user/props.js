import _ from "lodash";

//state
const user = (state, payload) => ({ ...state, [payload._id]: payload });
const afterUserDeleted = (state, payload) => _.omit(state, payload);
//const error = errorObject => ({});

//state selectors
const userSelector = id => ({ userReducer }) => userReducer[id];

export { user, afterUserDeleted, userSelector };
