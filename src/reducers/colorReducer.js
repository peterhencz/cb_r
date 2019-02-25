import { POST_COLOR } from '../actions/types';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
