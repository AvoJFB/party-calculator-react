import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import securityContext from './securityContext';
import common from './common';

export default combineReducers({
  toastr: toastrReducer,
  securityContext,
  common,
});
