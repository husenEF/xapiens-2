import React from 'react';
import {Text, View} from 'react-native';

const Hello = (props) => {
  const {children} = props;
//   console.log({hello: {children}});
  return (
    <View>
      <Text>Hello</Text>
      {children}
    </View>
  );
};

export default Hello;

export const HelloName = (props) => {
  console.log({props});
  return <Text>Hello {props.name.toUpperCase()}</Text>;
};

HelloName.defaultProps = {
  alamat: 'Jln Kaliurang',
};
