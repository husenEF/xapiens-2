import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

class Home extends Component {
  state = {
    name: 'Husen',
    time: 0,
    isLoading: true,
  };

  timer = null;

  componentDidMount() {
    console.log('didmount');
    // this.runTimer();
    //mengambil data ke BE
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  runTimer() {
    this.timer = setInterval(() => {
      this.setState({time: this.state.time + 1});
    }, 1000);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', {props, state});

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', {
      prevProps,
      prevState,
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  render() {
    const {isLoading} = this.state;
    console.log('render');
    console.log({timer: this.timer});
    return (
      <View style={style.container}>
        <Text>Home Component {this.state.name}</Text>
        <Text style={{...style.h2, ...style.colorBlue}}>
          timer {this.state.time}
        </Text>
        {isLoading ? (
          <Text>sedang mengambil data...</Text>
        ) : (
          <Text>Data sudah selesai di load</Text>
        )}
        <Button
          onPress={() => this.setState({name: 'refactory'})}
          title="update Name"
        />
      </View>
    );
  }
}

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  colorBlue: {
    color: 'blue',
  },
});
