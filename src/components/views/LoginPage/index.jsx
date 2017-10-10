import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Paper } from 'material-ui';
import s from './index.css';
import SignInForm from '../../forms/SignInForm';
import SignUpForm from '../../forms/SignUpForm';
import AuthContainer from '../../../containers/AuthContainer';
import SecurityContextContainer from '../../../containers/SecurityContextContainer';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.tabs = [
      '/signIn',
      '/signUp',
    ];
    console.log(this.props.location.pathname);
    this.state = { tab: this.tabs.indexOf(this.props.location.pathname) };
  }

  componentWillMount() {
    /**
     *  prevent logged in users see this page
     */
    if (this.props.securityContext.isLoggedIn) {
      this.props.history.replace('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ tab: this.tabs.indexOf(nextProps.location.pathname) });
    }
  }

  onSubmit() {
    this.props.history.push('/');
  }


  onTransitionEnd = () => {
    this.props.history.push(this.tabs[this.state.tab]);
  };
  changeTabIndex = (index) => {
    this.setState({ tab: index });
  };


  changeTab = (e, index) => {
    this.changeTabIndex(index);
  };

  render() {
    const { tab } = this.state;
    const SignIn = AuthContainer(SignInForm);
    const SignUp = AuthContainer(SignUpForm);
    const tabConf = {
      indicatorColor: 'primary',
      value: tab,
      indicatorClassName: s['tab-indicator'],
      onTransitionEnd: this.onTransitionEnd,
      onChange: this.changeTab,
    };
    return (
      <div className={s['flex-container-row']}>
        <div className={s['flex-container-column']}>
          <div style={{ minWidth: 0, width: '100%' }} />
          <Paper className={s.paper}>
            <Tabs {...tabConf} fullWidth centered>
              <Tab label="Sign in" styles={{ minWidth: '50%' }} />
              <Tab label="Sign up" styles={{ minWidth: '50%' }} />
            </Tabs>
            <SwipeableViews axis={'x'} index={this.state.tab} onChangeIndex={this.changeTabIndex}>
              <TabContainer dir={'x'}> <SignIn onSubmitted={() => this.onSubmit()} /></TabContainer>
              <TabContainer dir={'x'}> <SignUp onSubmitted={() => this.onSubmit()} /></TabContainer>
            </SwipeableViews>
          </Paper>
          <div style={{ minWidth: 0, width: '100%' }} />
        </div>
      </div>

    );
  }
}

export default SecurityContextContainer(withRouter(LoginPage));
