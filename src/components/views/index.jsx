import React from 'react';
import { Route } from 'react-router-dom';
import BasePage from './BasePage/index';
import store from '../../common/store';
import { restoreSession } from '../../actions/securityContextActions';
import SecurityContextContainer from '../../containers/SecurityContextContainer';

export default class IndexView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  async componentWillMount() {
    await store.dispatch(restoreSession());
    this.setState({ isLoaded: true });
  }

  render() {
    if (!this.state.isLoaded) {
      return '';
    }
    return (<Route path="/" component={SecurityContextContainer(BasePage)} />);
  }
}
