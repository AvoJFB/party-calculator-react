import React from 'react';


export default class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentWillMount() {
    const { keepCachedResolves } = this.props;
    let { resolved } = this.props;
    if (keepCachedResolves !== true) {
      const { resolves } = this.props;
      resolved = await Promise.all(resolves.map((resolvable) => {
        let res = resolvable;
        if (typeof res === 'string') {
          res = this.props[res];
        }
        if (typeof res === 'function') {
          return res();
        }
        return Promise.resolve(res);
      }));
      this.props.cacheResolves(resolved);
    }
    await this.setState({ loaded: true, resolved });
  }

  render() {
    const TargetComponent = this.props.component;
    if (this.state.loaded) {
      return (<TargetComponent {...this.props} />);
    }
    return (<span />);
  }
}
