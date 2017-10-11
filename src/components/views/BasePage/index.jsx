import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthContainer from '../../../containers/AuthContainer';
import BasePage from './BasePage';
import StateForRoute from '../../common/StateForRoute';

const BasePageContainer = () => {
  const config = {
    path: '/',
    component: BasePage,
    containers: [withRouter, AuthContainer],
    resolves: ['onSessionRefresh'],
  };
  return (<StateForRoute {...config} />);
};
export default BasePageContainer;
