import React from 'react';
import { Switch } from 'react-router-dom';
import LoginPage from '../views/LoginPage';
import store from '../../store';
import ConfigurableRoute from './ConfigurableRoute';

const requireAuth = (history) => {
  if (!store.getState().securityContext.isLoggedIn) {
    history.replace('/signIn');
  }
};
const requireLogout = (history) => {
  if (store.getState().securityContext.isLoggedIn) {
    history.replace('/');
  }
};
export default () => (
  <Switch>
    <ConfigurableRoute exact path="/" onEnter={requireAuth} />
    <ConfigurableRoute exact path="/signIn" component={LoginPage} onEnter={requireLogout} />
    <ConfigurableRoute exact path="/signUp" component={LoginPage} onEnter={requireLogout} />
  </Switch>
);
