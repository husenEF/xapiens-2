import React, {Component, createContext, useContext, useState} from 'react';
import {View, Text} from 'react-native';

import {HomeScreen, ActionScreen, ListPostScreen} from '@screens';
import CounterProvider from '@contexts/counter';
import PostProvider from '@contexts/post';

// 1. inisialisasi context
const GrretingContenxt = createContext();

const DisplayName = () => {
  const value = useContext(GrretingContenxt);
  return (
    <View>
      <Text>{value.text || 'Halo'}</Text>
    </View>
  );
};

class MyName extends Component {
  renderGreeting(text) {
    return `${text} Husen`;
  }

  renderCart() {
    return (
      <GrretingContenxt.Consumer>
        {value => <Text>{value.text} husen</Text>}
      </GrretingContenxt.Consumer>
    );
  }

  renderProfile() {
    return (
      <UserContext.Consumer>
        {value => <Text>halo {value.name}</Text>}
      </UserContext.Consumer>
    );
  }

  render() {
    return (
      <View>
        {this.renderCart()}
        <Text>halo</Text>
      </View>
    );
  }
}

const App = () => {
  // const [counter, setCounter] = useState(10);
  // const up = () => setCounter(counter + 1);
  // const down = () => setCounter(counter - 1);

  // const data = {
  //   counter,
  //   up,
  //   down,
  // };

  const changeToId = () => {
    return 'ID';
  };

  return (
    <View>
      <Text>Main App</Text>
      <CounterProvider>
        <PostProvider>
          <HomeScreen />
          <ActionScreen />
          <ListPostScreen />
        </PostProvider>
      </CounterProvider>
      <GrretingContenxt.Provider value={{text: "Assalamu'alaikum", changeToId}}>
        <DisplayName />
        <MyName />
      </GrretingContenxt.Provider>
    </View>
  );
};

export default App;
