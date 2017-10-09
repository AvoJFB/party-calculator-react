import axios from 'axios';
import { API, getPayload } from '../config';
import * as actionTypes from '../constants/securityContextConstants';

export const logIn = credentials => dispatch => (
  axios(API.login(credentials))
    .then(response => dispatch({ type: actionTypes.LOGIN, user: getPayload(response) }))
);

export const logOut = dispatch => (axios(API.logout())
  .then(() => dispatch({ type: actionTypes.LOGOUT })));

export const signUp = dispatch => (axios(API.signUp()))
  .then(response => dispatch({ type: actionTypes.LOGIN, user: getPayload(response) }));
