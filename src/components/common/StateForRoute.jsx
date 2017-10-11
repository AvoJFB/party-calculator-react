import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';


class StateForRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keepCachedResolves: false };
  }

  componentWillReceiveProps(newProps) {
    const { location, path } = newProps;
    this.setState({ keepCachedResolves: location.pathname.startsWith(path) });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // skip updating when updates 'resolved' property
    return nextState.resolved === this.state.resolved;
  }

  cacheResolves = (resolved) => {
    this.setState({ resolved });
  };

  render() {
    const { component, containers, ...newProps } = this.props;
    const { keepCachedResolves } = this.state;
    let AsyncComponentWrapp = AsyncComponent;
    if (containers && containers.length) {
      containers.forEach((container) => { AsyncComponentWrapp = container(AsyncComponentWrapp); });
    }
    const config = {
      component,
      containers,
      keepCachedResolves,
      cacheResolves: this.cacheResolves,
      ...newProps,
    };
    return (
      <Route>
        <AsyncComponentWrapp {...config} />
      </Route>
    );
  }
}

export default withRouter(StateForRoute);
