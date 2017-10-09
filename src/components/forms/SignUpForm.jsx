import React, { Component } from 'react';
import { Button, TextField } from 'material-ui';
import styles from './index.css';
import { Validatable, Validated } from './validators';

@Validatable
class SignUpForm extends Component {
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
    const [username, password] = this.state;
    this.props.onSignUp({ username, password })
      .then(() => this.props.onSubmitted());
  }

  stopSubmitPropagation = true;
  scheme = {
    username: { title: 'Username', validators: ['isRequired', 'isNotEmpty'] },
    password: { title: 'Password', validators: ['isRequired', 'isNotEmpty'] },
    passwordConfirm: {
      title: 'Confirm password',
      validators: ['isRequired', 'isNotEmpty', {
        name: 'passwordMatch',
        fn: () => (this.state.password !== this.state.passwordConfirm),
      }],
    },
  };

  errorMessages = {
    isNotEmpty: that => (`${that.title} is required.`),
    isRequired: that => (`${that.title} is required.`),
    passwordMatch: () => (`${this.scheme.password.title} should match the ${this.scheme.passwordConfirm.title}.`),
  };

  render() {
    return (
      <form autoComplete="off" className={styles['login-form']} onSubmit={e => this.onSubmit(e)}>
        <TextField
          id="helperText"
          className={styles.field}
          label={this.scheme.username.title}
          onChange={event => this.onChange('username', event.target.value)}
          helperText={this.getDefaultErrorMessage('username')}
          margin="normal"
        />
        <TextField
          id="new-password"
          label={this.scheme.password.title}
          onChange={event => this.onChange('password', event.target.value)}
          className={styles.field}
          type="password"
          helperText={this.getDefaultErrorMessage('password')}
          autoComplete="new-password"
          margin="normal"
        />
        <TextField
          id="new-password-confirm"
          label={this.scheme.passwordConfirm.title}
          onChange={event => this.onChange('passwordConfirm', event.target.value)}
          className={styles.field}
          type="password"
          helperText={this.getDefaultErrorMessage('passwordConfirm')}
          autoComplete="new-password"
          margin="normal"
        />
        <Button raised className={styles.button} type="submit">Sign up</Button>
      </form>

    );
  }
}

export default SignUpForm;
