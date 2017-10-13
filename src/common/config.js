import axios from 'axios';
import loading from '../actions/commonActions';
import api from './api';

export const getPayload = resp => (
  resp.data.payload
);
let pendingRequests = 0;
const finallyFn = () => {
  pendingRequests -= 1;
  if (pendingRequests === 0) {
    loading(false);
  }
};
export const API = {
  doRequest: (request) => {
    if (pendingRequests === 0) {
      loading(true);
    }
    pendingRequests += 1;
    return axios({ ...request, withCredentials: true })
      .then((req) => {
        finallyFn();
        return Promise.resolve(req);
      })
      .catch((req) => {
        finallyFn();
        return Promise.reject(req.response);
      });
  },
  ...api,
};
