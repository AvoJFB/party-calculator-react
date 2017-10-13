import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Paper } from 'material-ui';
import s from './index.css';
import SignInForm from '../../forms/SignInForm';
import SignUpForm from '../../forms/SignUpForm';
import AuthContainer from '../../../containers/AuthContainer';
import SecurityContextContainer from '../../../containers/SecurityContextContainer';
import router from '../../../common/router';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

class AuthPage extends Component {
  constructor(props) {
    const { stateService } = router;
    super(props);
    this.tabs = [
      'base.auth.signin',
      'base.auth.signup',
    ];
    this.state = {
      tab: this.tabs.indexOf(stateService.current.name),
      redirect: this.props.securityContext.isLoggedIn === true ? '/' : false,
    };
  }

  onSubmit() {
    router.stateService.go('base.dashboard');
  }

  onTransitionEnd = () => {
    router.stateService.go(this.tabs[this.state.tab], undefined, { reload: false, location: true });
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

export default SecurityContextContainer(AuthPage);
