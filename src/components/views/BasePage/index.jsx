import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/index';
import SecurityContextContainer from '../../../containers/SecurityContextContainer';
import AuthPage from '../AuthPage';

export default class BasePage extends React.Component {
  componentWillMount() {
    const { securityContext, history, match } = this.props;
    if (match.isExact) {
      if (!securityContext.isLoggedIn) {
        history.replace('/signIn');
      } else {
        history.replace('/dashboard');
      }
    }
  }

  render() {
    const AuthPageWrapped = SecurityContextContainer(AuthPage);
    return (
      <Switch>
        <Route path={`${this.props.match.url}dashboard`} component={SecurityContextContainer(Dashboard)} />
        <Route path={`${this.props.match.url}signIn`} component={AuthPageWrapped} />
        <Route path={`${this.props.match.url}signUp`} component={AuthPageWrapped} />
      </Switch>
    );
  }
}
