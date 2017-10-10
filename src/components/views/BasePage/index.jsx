import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';
import AuthContainer from '../../../containers/AuthContainer';

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
    const content = (
      <div>
        <Route exact path="/signIn" component={LoginPage} />
        <Route exact path="/signUp" component={LoginPage} />
      </div>
    );
    return this.state.loaded ? content : '';
  }
}

const BasePageContainer = () => (
  <Route path="/" component={AuthContainer(withRouter(BasePage))} />
);
export default BasePageContainer;

