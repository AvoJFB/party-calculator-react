import axios from 'axios';
import loading from './actions/commonActions';

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
let pendingRequests = 0;
export const API = {
  doRequest: (request) => {
    if (pendingRequests === 0) {
      loading(true);
    }
    pendingRequests += 1;
    return axios({ ...request, withCredentials: true })
      .then(req => (Promise.resolve(req)))
      .catch(req => (Promise.reject(req.response)))
      .finally(() => {
        pendingRequests -= 1;
        if (pendingRequests === 0) {
          loading(false);
        }
      });
  },
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
