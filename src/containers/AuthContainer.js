import { connect } from 'react-redux';
import SecurityContextContainer from './SecurityContextContainer';
import { logIn, logOut } from '../actions/securityContextActions';
import Auth from '../components/Auth';

const mapDispatchToProps = dispatch => ({
  onLogIn: user => dispatch(logIn(user)),
  onLogOut: () => dispatch(logOut()),
});
const AuthContainer = connect(null, mapDispatchToProps)(SecurityContextContainer(Auth));
export default AuthContainer;
