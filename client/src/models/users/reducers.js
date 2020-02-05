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
  { type, payload }
) => {
  switch (type) {
    case fetchUsers.type:
      return createLoadingState(state, payload);
    case fetchUsersFulfilled.type:
      return createState(state, payload);
    case fetchUsersRejected.type:
    case deleteUserRejected.type:
      return createErrorState(state, payload);
    case deleteUser.type:
      return state; //need state for the omit function in DELETE_USER_FULFILLED
    case deleteUserFulfilled.type:
      return afterUserDeleted(state, payload);
    default:
      return state;
  }
};
