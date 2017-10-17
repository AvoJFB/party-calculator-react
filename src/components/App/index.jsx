import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './index.css';
import GlobalTopBar from '../GlobalTopBar';
import store from '../../common/store';
import LoadingIndicator from '../LoadingIndicator/index';
import commonContainer from '../../containers/commonContainer';
import { toasterConfig } from '../../constants/commonConstants';
import IndexView from '../views/index';

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
            <IndexView />
            <LoadingIndicatorWrapp />
            <ReduxToastr {...toasterConfig} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
