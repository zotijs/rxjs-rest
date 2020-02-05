import _ from "lodash";
import update from "immutability-helper";

//state creators
// const createState = ({ users }, payload) => ({
//   users: {
//     ...users,
//     ..._.mapKeys(payload, "_id")
//   },
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

////pure js alternative
// const afterUserDeleted = ({ users }, payload) => {
//   const { [payload], ...otherUsersProps } = users;
//   return {
//     users: otherUsersProps,
//     isLoading: false,
//     error: null
//   };
// };

// const afterUserDeleted = ({ users }, payload) => ({
//   users: _.omit(users, payload),
//   isLoading: false,
//   error: null
// });

/*
  State using immutability-helper
*/

const createState = (state, payload) =>
  update(state, {
    users: { $set: _.mapKeys(payload, "_id") },
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

const afterUserDeleted = (state, payload) =>
  update(state, {
    users: { $unset: [payload] },
    isLoading: { $set: false },
    error: { $set: null }
  });

//state selectors
const users = ({ usersReducer }) =>
  usersReducer && usersReducer.users && Object.values(usersReducer.users);

const isLoading = ({ usersReducer }) => usersReducer && usersReducer.isLoading;

const error = ({ usersReducer }) => usersReducer && usersReducer.error;

export {
  createState,
  createLoadingState,
  createErrorState,
  afterUserDeleted,
  users,
  isLoading,
  error
};
