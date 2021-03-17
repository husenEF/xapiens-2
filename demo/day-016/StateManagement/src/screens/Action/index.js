import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';

import {CounterConsumer} from '@contexts/counter';

const Action = () => {
  const {increment, decrement} = CounterConsumer();
  //   console.log('action', value);
  return (
    <View>
      <Text>Action Screen</Text>
      <Button onPress={() => increment()} title="Up" />
      <Button onPress={() => decrement()} title="Down" />
    </View>
  );
};

export default Action;
