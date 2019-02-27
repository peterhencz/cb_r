import { POST_COLOR, GET_COLORS } from '../actions/types';

const intitialState = { color: [] };

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case POST_COLOR:
      return {
        ...state,
        color: payload,
      };
    case GET_COLORS:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};
