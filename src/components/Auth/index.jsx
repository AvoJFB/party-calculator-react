import React from 'react';
import Button from 'material-ui/Button';

const Auth = (props) => {
  let button;
  if (props.securityContext.isLoggedIn) {
    button = (
      <div>
        <span>{props.securityContext.user.username}</span>
        <Button onClick={() => props.onLogOut()}>Logout</Button>
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

export default Auth;
