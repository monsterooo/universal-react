import {
  FETCH_GITHUB_USER__SUCCESSED,
} from './actions';

const initialState = {};

const homeReducers = (previousState = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GITHUB_USER__SUCCESSED:
      return payload;
    default:
      return previousState;
  }
};

export default homeReducers;
