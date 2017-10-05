import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import store from '../../store';

const requireAuth = (nextState, replace) => {
  console.log(1);
  if (!store.getState().securityContext.isLoggedIn) {
    replace({
      pathname: '/login',
    });
  }
};
export default () => (
  <Switch>
    <Route path="/" onEnter={requireAuth} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);
