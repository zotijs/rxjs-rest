import { fetchUser, fetchUserFulfilled, fetchUserRejected } from "./actions";
import { createState, createLoadingState, createErrorState } from "./props";

export const userReducer = (
  state = { user: {}, isLoading: true, error: null },
  action
) => {
  switch (action.type) {
    case fetchUser.type:
      return createLoadingState(state, action.payload);
    case fetchUserFulfilled.type:
      return createState(state, action.payload);
    case fetchUserRejected.type:
      return createErrorState(state, action.payload);
    default:
      return state;
  }
};
