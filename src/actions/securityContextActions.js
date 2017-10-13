import { API, getPayload } from '../common/config';
import * as actionTypes from '../constants/securityContextConstants';

export const logIn = credentials => dispatch => (
  API.doRequest(API.login(credentials))
    .then(response => dispatch({ type: actionTypes.LOGIN, user: getPayload(response) }))
);

export const logOut = () => dispatch => (API.doRequest(API.logout())
  .then(() => dispatch({ type: actionTypes.LOGOUT })));

export const restoreSession = () => dispatch => (API.doRequest(API.restoreSession())
  .then((req) => {
    dispatch({ type: actionTypes.LOGIN, user: getPayload(req) });
    return req;
  }))
  .catch((req) => {
    dispatch({ type: actionTypes.LOGOUT });
    return req;
  });

export const signUp = dispatch => (API.doRequest(API.signUp()))
  .then(response => dispatch({ type: actionTypes.LOGIN, user: getPayload(response) }));
