import {combineReducers, createStore} from 'redux';

import globalReducer from './global/reducer';
import userReducer from './users/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
});
const store = createStore(rootReducer);

export default store
