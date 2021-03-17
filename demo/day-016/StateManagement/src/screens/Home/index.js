import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {CounterContext} from '@contexts/counter';
// import {CounterContext} from '../../../App';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <CounterContext.Consumer>
          {value => {
            console.log({value});
            const {number} = value;
            return (
              <Text style={{fontSize: 24, textAlign: 'center', margin: 5}}>
                {number}
              </Text>
            );
          }}
        </CounterContext.Consumer>
      </View>
    );
  }
}

export default HomeScreen;
