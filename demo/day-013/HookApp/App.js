import React from 'react';
import {Button, Text, View} from 'react-native';

import {Counter, Effect, Reff, FunctionRef} from '@components';
import {useLibCount} from '@libs';

const App = () => {
  const {counter, increment, decrement} = useLibCount(10);
  console.log({counter});
  return (
    <View>
      <Text>React Hook </Text>
      {/* <Counter /> */}
      <FunctionRef />
      <Text>use lib count: {counter}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </View>
  );
};

export default App;
