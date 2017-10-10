import * as actionTypes from '../constants/securityContextConstants';

export default function securityContext(state = { isLoggedIn: null, user: null }, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoggedIn: true, user: action.user };
    case actionTypes.LOGOUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
}
