import { combineReducers } from 'redux';
import securityContext from './securityContext';
import common from './common';

export default combineReducers({
  securityContext,
  common,
});
