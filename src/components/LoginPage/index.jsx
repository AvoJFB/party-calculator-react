import React from 'react';
import Button from 'material-ui/Button';
import store from '../../store';

const LoginPage = () => (
  <form>
    <Button raised color="primary" onClick={() => store.dispatch({ type: 'LOGIN' })}>Login</Button>
  </form>
);

export default LoginPage;
