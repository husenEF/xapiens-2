import React from 'react';
import {Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
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
import {store, persistor} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <View>
          <Text>Aapp</Text>
          <HomeScreen />
          <PostScreen />
          <FooterScreen />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
