import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {CounterConsumer} from '@contexts/counter';
import {PostConsumer} from '@contexts/post';

const Action = () => {
  const {increment, decrement} = CounterConsumer();
  const {
    getPost,
    data: {isLoading},
  } = PostConsumer();
  //   console.log('action', value);
  return (
    <View>
      <Text>Action Screen</Text>
      <Button onPress={() => increment()} title="Up" />
      <Button onPress={() => decrement()} title="Down" />
      <TouchableOpacity onPress={() => getPost()}>
        {isLoading ? <ActivityIndicator color="red" /> : <Text>Get Data</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Action;
