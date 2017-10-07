export const ORIGIN = 'http://localhost:8000';
export const ALLOWED_METHODS = {
  GET: 'GET',
  POST: 'POST',
};
export const API = {
  login: credentials => (
    {
      url: `${ORIGIN}/login/`,
      method: ALLOWED_METHODS.POST,
      data: credentials,
    }
  ),
  logout: () => (
    {
      url: `${ORIGIN}/logout/`,
      method: ALLOWED_METHODS.GET,
    }
  ),
};
