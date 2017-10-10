import LOADING from '../constants/commonConstants';

export default function common(state = { isLoading: false }, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}
