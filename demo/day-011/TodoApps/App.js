import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {HomeScreen, LandingScreen} from './src/screens';

const Style = StyleSheet.create({
  header: {
    padding: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    color: 'blue',
    fontSize: 20,
  },
});
class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  }

  returnText() {
    return this.state.loading ? 'Waiting' : 'Done';
  }

  ifElseComponent() {
    if (this.state.loading) return <LandingScreen />;
    else return <HomeScreen />;
  }

  render() {
    const {loading} = this.state;
    return (
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Text style={[Style.header, loading ? {color: 'green'} : null]}>
          Main App
        </Text>
        {loading ? (
          <LandingScreen />
        ) : (
          <View style={{flex: 1, backgroundColor: 'pink'}}>
            <Text>Todo App</Text>
            <HomeScreen />
          </View>
        )}
      </View>
    );
  }

  renderOld() {
    const {loading} = this.state;

    const Hello = <Text>Hello</Text>;
    const Hai = <Text>hai dunia</Text>;

    return (
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        {
          //ternary expression
        }
        {loading ? <Hello /> : <Hai />}

        <Text>{loading ? 'halo' : 'hai'}</Text>
        <Text>{this.returnText()}</Text>
        {
          //cara 3 ,masukkan dalam sebuah method
        }
        {this.ifElseComponent()}
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
