import React from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import UserProvider, {useUser} from '@contexts/user';

const LoginScreen = () => {
  const {
    login,
    data: {isLoading},
  } = useUser();
  // console.log({userContext});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      {isLoading && <ActivityIndicator color="red" />}
      <Button
        title="Login User"
        onPress={() => login('Nathan@yesenia.net', '123123')}
      />
    </View>
  );
};


export default LoginScreen;
