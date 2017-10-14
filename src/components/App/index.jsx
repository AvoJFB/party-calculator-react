import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { UIRouter, UIView } from '@uirouter/react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './index.css';
import GlobalTopBar from '../GlobalTopBar';
import store from '../../common/store';
import LoadingIndicator from '../LoadingIndicator/index';
import commonContainer from '../../containers/commonContainer';
import router from '../../common/router';
import { toasterConfig } from '../../constants/commonConstants';

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
        <UIRouter router={router}>
          <div>
            <GlobalTopBar />
            <UIView />
            <LoadingIndicatorWrapp />
            <ReduxToastr {...toasterConfig} />
          </div>
        </UIRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
