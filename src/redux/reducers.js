import {combineReducers} from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfoReducers';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

export default combineReducers({
  counter,
  userInfo,
  todos,
  visibilityFilter
})