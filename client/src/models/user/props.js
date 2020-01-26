//state
const createState = ({ user }, payload) => ({
  user: { ...user, [payload._id]: payload },
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
