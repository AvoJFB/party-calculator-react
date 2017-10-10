import { connect } from 'react-redux';
import SecurityContextContainer from './SecurityContextContainer';
import { logIn, logOut, signUp, restoreSession } from '../actions/securityContextActions';

const mapDispatchToProps = dispatch => ({
  onLogIn: user => dispatch(logIn(user)),
  onLogOut: () => dispatch(logOut()),
  onSessionRefresh: () => dispatch(restoreSession()),
  onSignUp: credentials => dispatch(signUp(credentials)),
});
const AuthContainer = Component => (
  connect(null, mapDispatchToProps)(SecurityContextContainer(Component)));
export default AuthContainer;
