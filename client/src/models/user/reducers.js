import {
  fetchUser,
  fetchUserFulfilled,
  fetchUserRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
} from "./actions";
import { user, afterUserDeleted } from "./props";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchUser.type:
      return {};
    case fetchUserFulfilled.type:
      return user(state, action.payload);
    case fetchUserRejected.type:
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
