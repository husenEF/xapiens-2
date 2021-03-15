import React from 'react';
import {Text, View} from 'react-native';

//1 import navigation container & navigation stack
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//2. import another screens
import {HomeScreen, AboutScreen, UserScreen} from '@screens';
import {LogoComponent} from '@components';

//3 inisialisasi stack navigatornya
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Dashboard',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: '100',
              color: 'blue',
            },
            headerTitle: props => (
              <LogoComponent {...props} title="About Screen" />
            ),
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;