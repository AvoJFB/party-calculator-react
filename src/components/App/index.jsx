import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>App container</h1>
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
