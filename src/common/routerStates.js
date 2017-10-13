import { UIView } from '@uirouter/react';
import Dashboard from '../components/Dashboard';
import AuthPage from '../components/views/AuthPage';
import store from './store';
import { restoreSession } from '../actions/securityContextActions';
import BasePage from '../components/views/BasePage/index';

const states = [
  {
    name: 'base',
    url: '/',
    component: BasePage,
    resolve: {
      securityContext: () => store.dispatch(restoreSession()),
    },
  },
  {
    name: 'base.dashboard',
    url: 'dashboard',
    component: Dashboard,
    data: {
      requiresAuth: true,
    },
  },
  {
    name: 'base.auth',
    url: 'auth',
    component: UIView,
    data: {
      requiresLogout: true,
    },
  },
  {
    name: 'base.auth.signin',
    url: '/signIn',
    component: AuthPage,
  },
  {
    name: 'base.auth.signup',
    url: '/signUp',
    component: AuthPage,
  },
];
export default states;
