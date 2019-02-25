import { POST_COLOR } from '../actions/types';

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case POST_COLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};
