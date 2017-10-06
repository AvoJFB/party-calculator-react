import { Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class ConfigurableRoute extends Component {
  componentWillMount() {
    this.onEnter(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onEnter(nextProps);
  }

  onEnter(props) {
    const { history } = props;
    if (props.onEnter) {
      const result = props.onEnter(history);
      if (result instanceof Promise) {
        this.isLoading = true;
        result.then(() => { this.isLoading = false; });
      }
    }
  }

  render() {
    if (this.isLoading) {
      return <div>Loading, please wait..</div>;
    }
    return (<Route {...this.props} >{this.props.children}</Route>);
  }
}

export default withRouter(ConfigurableRoute);
