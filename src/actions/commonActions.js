import { LOADING } from '../constants/commonConstants';
import store from '../common/store';

const loading = isLoading => (
  store.dispatch({ type: LOADING, isLoading })
);
export default loading;
