import { fetchUsers, fetchUsersFulfilled, fetchUsersRejected } from "./actions";
import { users } from "./props";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchUsers.type:
      return {};
    case fetchUsersFulfilled.type:
      return users(state, action.payload);
    case fetchUsersRejected.type:
      return action.payload;
    default:
      return state;
  }
};
