import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import globalReducer from './global/reducer';
import userReducer from './users/reducer';
import postReducer from './post/reducer';


const custoMiddleWare = (store)=>{
  return (next)=>{
    return (action)=>{
      if(action==='GET_POST'){
        //axios dll
      }
    }
  }
}

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  post: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
