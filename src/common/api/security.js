import { ORIGIN, ALLOWED_METHODS, API_PATH_PREFIX } from './apiConstants';

const api = {
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
export default api;
