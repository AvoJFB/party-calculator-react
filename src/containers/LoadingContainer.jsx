import { connect } from 'react-redux';

const LoadingContainer = ({ isLoading, error, children }) => {
  if (isLoading) {
    return 'Loading ...';
  } else if (error) {
    return 'Error';
  }
  return children;
};

const mapStateToProps = state => ({
  isLoading: state.common.isLoading,
  error: state.common.error,
});

export default connect(mapStateToProps)(LoadingContainer);
