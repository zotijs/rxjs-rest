import _ from "lodash";

//state
const createState = ({ users }, payload) => ({
  users: {
    ...users,
    ..._.mapKeys(payload, "_id")
  },
  isLoading: false,
  error: null
});
const createLoadingState = (state, payload) => ({
  ...state,
  isLoading: true,
  error: null
});
const createErrorState = (state, payload) => ({
  ...state,
  isLoading: false,
  error: { ...payload }
});
const afterUserDeleted = ({ users }, payload) => ({
  users: _.omit(users, payload),
  isLoading: false,
  error: null
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
