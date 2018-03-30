import {combineReducers} from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfoReducers';

export default combineReducers({
  counter,
  userInfo
})