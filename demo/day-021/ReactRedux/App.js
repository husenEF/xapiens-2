import React from 'react';
import {Text, View} from 'react-native';

import {Provider} from 'react-redux';
// import {combineReducers, createStore} from 'redux';

import {HomeScreen, PostScreen, FooterScreen} from './src/screens';

// const initialState = {
//   count: 0,
//   name: 'refactory',
//   todos: [],
// };

// const globalreducer = (state = initialState, action) => {
//   console.log({action});
//   switch (action.type) {
//     case 'ADD_TODO':
//       break;

//     case 'INC':
//       const {count} = state;

//       return {...state, count: count + 1};

//     case 'UPDATE_NAME':
//       return {...state, name: action.value};
//     default:
//       return state;
//   }
// };

// const initialStateUser = {
//   name: '',
//   email: '',
// };
// const userReducer = (state = initialStateUser, action) => {
//   switch (action.type) {
//     case 'UPDATE_USER':
//       break;

//     case 'UPDATE':
//       return state.name;
//     default:
//       return state;
//   }
// };

// const mainReducer = combineReducers({
//   global: globalreducer,
//   user: userReducer,
// });
// const store = createStore(mainReducer);
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Aapp</Text>
        <HomeScreen />
        <PostScreen />
        <FooterScreen />
      </View>
    </Provider>
  );
};

export default App;
