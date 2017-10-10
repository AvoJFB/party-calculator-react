import axios from 'axios';

export const ORIGIN = 'http://localhost:8000';
export const API_PATH_PREFIX = '/api';
export const ALLOWED_METHODS = {
  GET: 'GET',
  POST: 'POST',
  OPTIONS: 'OPTIONS',
};
export const getPayload = resp => (
  resp.data.payload
);
export const API = {
  doRequest: request => (
    axios({ ...request, withCredentials: true })
      .then(req => (Promise.resolve(req)))
      .catch(req => (Promise.reject(req.response)))
  ),
  login: credentials => (
    {
      url: `${ORIGIN + API_PATH_PREFIX}/security/login`,
      method: ALLOWED_METHODS.POST,
      data: credentials,
    }
  ),
  logout: () => (
    {
      url: `${ORIGIN + API_PATH_PREFIX}/security/logout`,
      method: ALLOWED_METHODS.GET,
    }
  ),
  restoreSession: () => (
    {
      url: `${ORIGIN + API_PATH_PREFIX}/security/restore-session`,
      method: ALLOWED_METHODS.GET,
    }
  ),
  signUp: credentials => (
    {
      url: `${ORIGIN + API_PATH_PREFIX}/security/signup`,
      method: ALLOWED_METHODS.POST,
      data: credentials,
    }
  ),
};
