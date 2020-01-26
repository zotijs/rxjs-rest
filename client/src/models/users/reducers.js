import {
  fetchUsers,
  fetchUsersFulfilled,
  fetchUsersRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
} from "./actions";
import {
  createState,
  createLoadingState,
  createErrorState,
  afterUserDeleted
} from "./props";

export const usersReducer = (
  state = { users: {}, isLoading: true, error: null },
  action
) => {
  switch (action.type) {
    case fetchUsers.type:
      return createLoadingState(state, action.payload);
    case fetchUsersFulfilled.type:
      return createState(state, action.payload);
    case fetchUsersRejected.type:
    case deleteUserRejected.type:
      return createErrorState(state, action.payload);
    case deleteUser.type:
      return state; //need state for the omit function in DELETE_USER_FULFILLED
    case deleteUserFulfilled.type:
      return afterUserDeleted(state, action.payload);
    default:
      return state;
  }
};
