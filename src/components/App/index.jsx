import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import BasePage from '../views/BasePage';
import GlobalTopBar from '../GlobalTopBar';
import store from '../../store';

const theme = createMuiTheme({
  direction: 'ltr',
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <GlobalTopBar />
            <BasePage />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
