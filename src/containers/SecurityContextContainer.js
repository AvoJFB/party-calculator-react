import { connect } from 'react-redux';

const mapStateToProps = state => ({
  securityContext: state.securityContext,
});
const SecurityContextContainer = connect(mapStateToProps, null);
export default SecurityContextContainer;
