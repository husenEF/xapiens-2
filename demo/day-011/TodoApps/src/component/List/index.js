import React from 'react';
import {Text, View} from 'react-native';

const ListComponent = ({data}) => {
  console.log({data});
  return (
    <View>
      <Text>List Component</Text>
    </View>
  );
};

export default ListComponent;
