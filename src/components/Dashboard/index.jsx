import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { securityContext, history } = this.props;
    if (!securityContext.isLoggedIn) {
      history.replace('/signIn');
    }
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

export default Dashboard;
