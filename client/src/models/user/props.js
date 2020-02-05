import update from "immutability-helper";

//state creators
// const createState = ({ user }, payload) => ({
//   user: { ...user, [payload._id]: payload },
//   isLoading: false,
//   error: null
// });

// const createLoadingState = (state, payload) => ({
//   ...state,
//   isLoading: true,
//   error: null
// });

// const createErrorState = (state, payload) => ({
//   ...state,
//   isLoading: false,
//   error: { ...payload }
// });

/*
  State using immutability-helper
*/
const createState = (state, payload) =>
  update(state, {
    user: { $set: { [payload._id]: payload } },
    isLoading: { $set: false },
    error: { $set: null }
  });

const createLoadingState = state =>
  update(state, {
    isLoading: { $set: true },
    error: { $set: null }
  });

const createErrorState = (state, payload) =>
  update(state, {
    isLoading: { $set: false },
    error: { $set: { payload } }
  });

//state selectors
const user = id => ({ userReducer }) =>
  userReducer && userReducer.user && userReducer.user[id];

const isLoading = ({ userReducer }) => userReducer && userReducer.isLoading;

const error = ({ userReducer }) => userReducer && userReducer.error;

export {
  createState,
  createLoadingState,
  createErrorState,
  user,
  isLoading,
  error
};
