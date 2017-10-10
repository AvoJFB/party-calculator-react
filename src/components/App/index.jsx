import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import BasePageContainer from '../views/BasePage';
import GlobalTopBar from '../GlobalTopBar';
import store from '../../store';
import LoadingIndicator from '../LoadingIndicator/index';
import commonContainer from '../../containers/commonContainer';

const theme = createMuiTheme({
  direction: 'ltr',
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

function App() {
  const LoadingIndicatorWrapp = commonContainer(LoadingIndicator);
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <GlobalTopBar />
            <BasePageContainer />
            <LoadingIndicatorWrapp />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
