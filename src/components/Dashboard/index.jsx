import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button onClick={() => console.log(this)}>My Button</Button>
    );
  }
}

export default Dashboard;
