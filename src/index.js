import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Example />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
