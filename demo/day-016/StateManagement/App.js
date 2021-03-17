import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';

import {HomeScreen, ActionScreen, ListPostScreen} from '@screens';
import CounterProvider from '@contexts/counter';
import PostProvider from '@contexts/post';
//1. inisialisasi context
// const CounterContext = createContext();

// export {CounterContext};

const App = () => {
  // const [counter, setCounter] = useState(10);
  // const up = () => setCounter(counter + 1);
  // const down = () => setCounter(counter - 1);

  // const data = {
  //   counter,
  //   up,
  //   down,
  // };

  return (
    <View>
      <Text>Main App</Text>
      <CounterProvider>
        <PostProvider>
          <HomeScreen />
          <ActionScreen />
          <ListPostScreen />
        </PostProvider>
      </CounterProvider>
    </View>
  );
};

export default App;
