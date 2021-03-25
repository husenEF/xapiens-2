import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import globalReducer from './global/reducer';
import userReducer from './users/reducer';
import postReducer from './post/reducer';

// import store from './store';

const persistConfig = {
  key: 'myApps',
  storage: AsyncStorage,
  blacklist: ['global'],
};

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);
export const persistor = persistStore(store);

export default {};
