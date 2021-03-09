import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {HomeScreen, LandingScreen} from './src/screens';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  }
  render() {
    const {loading} = this.state;
    return (
      <View>
        {loading ? (
          <LandingScreen />
        ) : (
          <>
            <Text>Todo App</Text>
            <HomeScreen />
          </>
        )}
      </View>
    );
  }
}

export default App;
