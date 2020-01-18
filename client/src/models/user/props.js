import _ from "lodash";

const user = (state, payload) => ({ ...state, [payload._id]: payload });
const afterUserDeleted = (state, payload) => _.omit(state, payload);
//const error = errorObject => ({});

export { user, afterUserDeleted };
