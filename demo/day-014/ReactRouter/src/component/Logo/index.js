import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Logo = ({title}) => {
  return (
    <View style={Style.container}>
      {title !== '' ? <Text style={Style.title}>{title}</Text> : null}
      <Image
        style={Style.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};
export default Logo;

Logo.defaultProps = {
  title: '',
};

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontWeight: 'bold',
  },
});
