import { POST_COLOR, GET_COLOR } from '../actions/types';

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case POST_COLOR:
      return {
        ...state,
        color: payload,
      };
    case GET_COLOR:
      return {
        payload,
      };
    default:
      return state;
  }
};
