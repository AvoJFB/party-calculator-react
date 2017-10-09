import React, { Component } from 'react';
import { Button, TextField } from 'material-ui';
import styles from './index.css';
import { Validated, Validatable } from './validators';

@Validatable
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(fieldName, value) {
    this.resetErrorsFor(fieldName);
    this.setState({ [fieldName]: value });
  }

  @Validated
  onSubmit() {
    this.props.onLogIn(this.state)
      .then(() => this.props.onSubmitted());
  }

  stopSubmitPropagation = true;
  scheme = {
    username: { title: 'Username', validators: ['isRequired', 'isNotEmpty'] },
    password: { title: 'Password', validators: ['isRequired', 'isNotEmpty'] },
  };

  errorMessages = {
    isNotEmpty: that => (`${that.title} is required.`),
    isRequired: that => (`${that.title} is required.`),
  };

  render() {
    return (
      <form autoComplete="off" className={styles['login-form']} onSubmit={e => this.onSubmit(e)}>
        <TextField
          id="helperText"
          className={styles.field}
          label={this.scheme.title}
          onChange={event => this.onChange('username', event.target.value)}
          helperText={this.getDefaultErrorMessage('username')}
          margin="normal"
        />
        <TextField
          id="password"
          label={this.scheme.title}
          onChange={event => this.onChange('password', event.target.value)}
          className={styles.field}
          type="password"
          helperText={this.getDefaultErrorMessage('password')}
          autoComplete="current-password"
          margin="normal"
        />
        <Button raised className={styles.button} type="submit">Sign in</Button>
      </form>
    );
  }
}

export default SignInForm;
