import { combineReducers } from 'redux';
import colorReducer from './colorReducer';

export default combineReducers({
  color: colorReducer,
});
