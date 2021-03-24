import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {changeName} from '../Post/actions';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Footer</Text>
      <Button
        title="Update name"
        onPress={() => {
          dispatch(changeName('Iman'));
        }}
      />
    </View>
  );
};

export default Footer;
