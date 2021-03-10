import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Touchable,
  Dimensions,
} from 'react-native';
const SnackBar = ({message, isOpen, action}) => {
  if (!isOpen) return null;
  return (
    <View style={Style.constainer}>
      <Text style={Style.text}>{message}</Text>
      <TouchableOpacity style={Style.btn} onPress={action}>
        <Text>CLose</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SnackBar;

const {width} = Dimensions.get('window');

const Style = StyleSheet.create({
  constainer: {
    position: 'absolute',
    width: width - 20,
    height: 50,
    backgroundColor: '#cdcdcd',
    padding: 5,
    marginLeft: 10,
    bottom: 10,
    flexDirection: 'row',
    // marginRight: 10,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    width: 50,
    justifyContent: 'center',
  },
});
