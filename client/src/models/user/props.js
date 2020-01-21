import _ from "lodash";

//state
const user = (state, payload) => ({ ...state, [payload._id]: payload });
//const error = errorObject => ({});

//state selectors
const userSelector = id => ({ userReducer }) => userReducer[id];

export { user, userSelector };
