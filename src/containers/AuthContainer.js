import { connect } from 'react-redux';
import SecurityContextContainer from './SecurityContextContainer';
import { logIn, logOut } from '../actions/securityContextActions';

const mapDispatchToProps = dispatch => ({
  onLogIn: user => dispatch(logIn(user)),
  onLogOut: () => dispatch(logOut()),
});
const AuthContainer = Component => (
  connect(null, mapDispatchToProps)(SecurityContextContainer(Component)));
export default AuthContainer;
