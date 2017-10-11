import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../../Dashboard/index';
import AuthPage from '../AuthPage';

const BasePage = props => (
  <Switch>
    <Route path="/signIn" component={AuthPage} />
    <Route path="/signUp" component={AuthPage} />
    <Route path="/" component={props.securityContext.isLoggedIn ? Dashboard : () => (<Redirect to="/signIn" />)} />
  </Switch>
);

export default BasePage;
