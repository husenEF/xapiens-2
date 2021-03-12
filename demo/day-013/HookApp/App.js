import React from 'react';
import {Text, View} from 'react-native';

import {Counter, Effect, Reff, FunctionRef} from '@components';

const App = () => {
  return (
    <View>
      <Text>React Hook </Text>
      <Counter />
      {/* <FunctionRef /> */}
    </View>
  );
};

export default App;
