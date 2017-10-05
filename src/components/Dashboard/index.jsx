import React, { Component } from 'react';
import Button from 'material-ui/Button';
import store from '../../store';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button onClick={() => store.dispatch({ type: 'LOGIN' })}>My Button</Button>
    );
  }
}

export default Dashboard;
