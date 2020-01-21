import {
  fetchUsers,
  fetchUsersFulfilled,
  fetchUsersRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
} from "./actions";
import { users, afterUserDeleted } from "./props";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchUsers.type:
      return {};
    case fetchUsersFulfilled.type:
      return users(state, action.payload);
    case fetchUsersRejected.type:
      return action.payload;
    case deleteUser.type:
      return state; //need state for the omit function in DELETE_USER_FULFILLED
    case deleteUserFulfilled.type:
      return afterUserDeleted(state, action.payload);
    case deleteUserRejected.type:
      return action.payload;
    default:
      return state;
  }
};
