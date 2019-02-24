import { POST_COLOR } from '../actions';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
