import 'typeface-roboto';
import React from 'react';
import BrowserRouter from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';

// eslint-disable-next-line react/jsx-filename-extension
const Root = (
  <BrowserRouter><Routes /></BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
