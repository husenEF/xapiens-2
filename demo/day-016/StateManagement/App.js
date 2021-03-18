import React, {Component, createContext, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  ActionScreen,
  ListPostScreen,
  UserScreen,
  LoginScreen,
} from '@screens';
import CounterProvider from '@contexts/counter';
import PostProvider from '@contexts/post';
import UserProvider, {useUser} from './src/context/user';

const Stack = createStackNavigator();

const App = () => {
  const {
    data: {isLogin},
  } = useUser();
  // console.log({UserData});
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Post" component={ListPostScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MasterApp = props => (
  <UserProvider>
    <App {...props} />
  </UserProvider>
);

export default MasterApp;
