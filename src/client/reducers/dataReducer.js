import { FETCH_FEATURES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FEATURES:
      return action.payload;
    default:
      return state;
  }
};
