import { fetchUser, fetchUserFulfilled, fetchUserRejected } from "./actions";
import { user } from "./props";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchUser.type:
      return {};
    case fetchUserFulfilled.type:
      return user(state, action.payload);
    case fetchUserRejected.type:
      return action.payload;
    default:
      return state;
  }
};
