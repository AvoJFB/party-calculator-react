import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';
import AuthContainer from '../../../containers/AuthContainer';

class BaseRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentWillMount() {
    const { history, securityContext, location } = this.props;
    /**
     * check if securityContext is not initialized
     */
    if (securityContext.isLoggedIn === null) {
      await this.props.onSessionRefresh();
    }
    if (!securityContext.isLoggedIn && location.pathname === '/') {
      history.replace('/signIn');
    }
    this.setState({ loaded: true });
  }

  render() {
    const content = (
      <div>
        <Route exact path="/signIn" component={LoginPage} />
        <Route exact path="/signUp" component={LoginPage} />
      </div>
    );
    return this.state.loaded ? content : ''; // todo add loading indicator here
  }
}

const Routes = () => (
  <Route path="/" component={AuthContainer(withRouter(BaseRoute))} />
);
export default Routes;

