import axios from 'axios';
import { API } from '../config';
import * as actionTypes from '../constants/securityContextConstants';

export const logIn = credentials => dispatch => (
  axios(API.login(credentials))
    .then(response => dispatch({ type: actionTypes.LOGIN, user: response.data }))
);

export const logOut = dispatch => (axios(API.logout())
  .then(() => dispatch({ type: actionTypes.LOGOUT })));
