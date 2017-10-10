import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';
import AuthContainer from '../../../containers/AuthContainer';
import Dashboard from '../../Dashboard/index';

class BasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: !this.loadIsNeeded() };
  }

  async componentWillMount() {
    const { history, securityContext, location } = this.props;
    /**
     * check if securityContext is not initialized
     */
    if (this.loadIsNeeded()) {
      await this.props.onSessionRefresh();
      await this.setState({ loaded: true });
    }
    if (!securityContext.isLoggedIn && location.pathname === '/') {
      history.replace('/signIn');
    }
  }

  loadIsNeeded() {
    return this.props.securityContext.isLoggedIn === null;
  }

  render() {
    let content;
    if (!this.state.loaded) {
      content = '';
    } else if (!this.props.securityContext.isLoggedIn && this.props.location.pathname !== '/') {
      content = (
        <LoginPage />
      );
    } else {
      content = <Dashboard />;
    }
    return content;
  }
}

const BasePageContainer = () => (
  <Route path="/" component={AuthContainer(withRouter(BasePage))} />
);
export default BasePageContainer;

