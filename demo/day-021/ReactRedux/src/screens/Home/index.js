import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const {count, name} = useSelector(state => {
    console.log({state});
    return {
      count: state.global.count,
      name: state.global.name,
    };
  });
  console.log({count});
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        paddingBottom: 10,
      }}>
      <Text>Home</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>{count}</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>name: {name}</Text>
    </View>
  );
};

export default Home;
