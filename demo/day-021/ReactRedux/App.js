import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
// import {combineReducers, createStore} from 'redux';

import {
  HomeScreen,
  PostScreen,
  FooterScreen,
  AboutSccreen,
} from './src/screens';

// const initialState = {
//   count: 0,
//   name: 'refactory',
//   todos: [],
// };

// const globalreducer = (state = initialState, action) => {
//   console.log({action});
//   switch (action.type) {
//     case 'ADD_TODO':
//       break;

//     case 'INC':
//       const {count} = state;

//       return {...state, count: count + 1};

//     case 'UPDATE_NAME':
//       return {...state, name: action.value};
//     default:
//       return state;
//   }
// };

// const initialStateUser = {
//   name: '',
//   email: '',
// };
// const userReducer = (state = initialStateUser, action) => {
//   switch (action.type) {
//     case 'UPDATE_USER':
//       break;

//     case 'UPDATE':
//       return state.name;
//     default:
//       return state;
//   }
// };

// const mainReducer = combineReducers({
//   global: globalreducer,
//   user: userReducer,
// });
// const store = createStore(mainReducer);
import {store, persistor} from './src/redux';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Icon name="home" color="red" />
      <Text>Aapp</Text>
      <HomeScreen />
      <PostScreen />
      <FooterScreen />
    </View>
  );
};
// const

const ICONS = {
  Home: <Icon name="home" />,
  About: <Icon name="contact" />,
};
const iconstName = {
  Home: 'home',
  About: 'contact',
};

const RenderIcon = ({disabled, name}) => {
  // return ICONS[name]
  return <Icon name={name} color={disabled ? 'grey' : 'tomato'} />;
};

function MyTabBar({state, descriptors, navigation, loading}) {
  console.log({state, descriptors, navigation, loading});
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#F4AF5F',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (label === 'Logout') {
            //dispacth logout
          } else if (!isFocused && !event.defaultPrevented && !loading) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {/* {ICONS[label]} */}
            <RenderIcon disabled={loading} name={iconstName[label]} />
            {isFocused && (
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            )}
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const App = () => {
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLocalLoading(false), 3000);
  }, []);
  console.log({localLoading});
  return (
    <Provider store={store}>
      <PersistGate localLoading={false} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <MyTabBar {...props} loading={localLoading} />}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="home" color={localLoading ? 'grey' : 'tomato'} />
                ),
              }}
            />
            <Tab.Screen
              name="About"
              component={AboutSccreen}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon
                    name="contact"
                    color={localLoading ? 'grey' : 'tomato'}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
