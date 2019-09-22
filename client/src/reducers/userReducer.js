import { FETCH_USER, FETCH_USER_FULFILLED } from "../actions/types";

export const userReducer = (state = {}, action) => {
  if (action.type === FETCH_USER) return {};
  if (action.type === FETCH_USER_FULFILLED)
    return { ...state, [action.payload._id]: action.payload };

  return state;
};
