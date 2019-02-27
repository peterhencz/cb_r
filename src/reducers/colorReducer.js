import { POST_COLOR, GET_COLOR } from '../actions/types';

const intitialState = { color: [] };

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case POST_COLOR:
      return {
        ...state,
        color: payload,
      };
    case GET_COLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};
