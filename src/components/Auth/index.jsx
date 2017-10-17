import React from 'react';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom';

const Auth = (props) => {
  let button;
  if (props.securityContext.isLoggedIn) {
    button = (
      <div>
        <span>{props.securityContext.user.username}</span>
        <Button onClick={() => props.onLogOut().then(() => props.history.push('/signIn'))}>Logout</Button>
      </div>
    );
  } else {
    button = '';
  }
  return (
    <div className="auth-container">
      {button}
    </div>);
};

export default withRouter(Auth);
