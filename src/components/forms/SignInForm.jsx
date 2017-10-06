import React, { Component } from 'react';
import { Button, TextField } from 'material-ui';
import styles from './index.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(fieldName, value) {
    this.setState({ [fieldName]: value });
  }

  onSubmit() {
    this.props.onLogIn(this.state)
      .then(() => this.props.onSubmitted());
  }

  render() {
    return (
      <form autoComplete="off" className={styles['login-form']}>
        <TextField
          id="helperText"
          className={styles.field}
          label="username or email"
          onChange={event => this.onChange('username', event.target.value)}
          helperText=""
          margin="normal"
        />
        <TextField
          id="password"
          label="password"
          onChange={event => this.onChange('password', event.target.value)}
          className={styles.field}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button raised className={styles.button} onClick={() => this.onSubmit()}>Submit</Button>
      </form>

    );
  }
}

export default SignInForm;
