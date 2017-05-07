import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './posts_reducer';

export default combineReducers({
  posts, form
});
