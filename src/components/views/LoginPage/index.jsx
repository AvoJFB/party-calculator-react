import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Paper } from 'material-ui';
import s from './index.css';
import SignInForm from '../../forms/SignInForm';
import SignUpForm from '../../forms/SignUpForm';
import AuthContainer from '../../../containers/AuthContainer';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.tabs = [
      '/signIn',
      '/signUp',
    ];
    this.state = { tab: this.tabs.indexOf(this.props.location.pathname) };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ tab: this.tabs.indexOf(nextProps.location.pathname) });
    }
  }

  onTabSelected(event, tab) {
    if (tab !== this.state.tab) {
      this.props.history.push(this.tabs[tab]);
    }
  }

  render() {
    const { tab } = this.state;
    const WrappedSignInForm = AuthContainer(SignInForm);
    return (
      <div className={s['flex-container']}>
        <Paper className={s.paper}>
          <Tabs indicatorColor="primary" value={tab} onChange={(event, val) => this.onTabSelected(event, val)}>
            <Tab label="Sign in" />
            <Tab label="Sign up" />
          </Tabs>
          {tab === this.tabs.indexOf('/signIn') && <WrappedSignInForm onSubmitted={() => this.props.history.push('/')} />}
          {tab === this.tabs.indexOf('/signUp') && <SignUpForm />}
        </Paper>
      </div>

    );
  }
}

export default LoginPage;
