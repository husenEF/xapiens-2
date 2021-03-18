import React from 'react';
import {Button, Text, View} from 'react-native';
import {useUser} from '@contexts/user';

const UserScreen = ({navigation}) => {
  const userData = useUser();
  console.log({userData});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Screen</Text>
      <Button onPress={() => navigation.navigate('Post')} title="Go to Post" />
    </View>
  );
};

export default UserScreen;
