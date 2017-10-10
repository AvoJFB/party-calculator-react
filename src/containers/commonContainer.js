import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoading: state.common.isLoading,
});
const commonContainer = connect(mapStateToProps);
export default commonContainer;
