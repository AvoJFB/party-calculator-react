import React from 'react';
import { UIView } from '@uirouter/react';

export default class BasePage extends React.Component {
  componentDidMount() {
    const state = this.props.transition.router.stateService;
    state.go('base.dashboard', null, { reload: false, location: true });
  }

  render() {
    return (<UIView />);
  }
}
