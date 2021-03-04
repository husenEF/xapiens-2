import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

const version = <Text>1.0.0</Text>;
const renderVersion = () => <Text>1.0.1</Text>;

class App extends Component {
  state = {
    name: 'husen',
    counter: 0,
    list: {
      name: 'husen',
      alamat: 'Jalan Palagan',
      jobs: '',
    },
    isOpen: false,
  };

  increment() {
    const {counter} = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  dec = () => {
    const {counter} = this.state;
    this.setState({counter: counter - 1});
  };

  updateName = (text) => {
    const {list} = this.state;

    this.setState({
      list: {...list, alamat: 'jln kaliurang'},
    });
  };

  renderName() {
    return <Text>{`${this.state.name}`}</Text>;
  }

  renderBtnLogin() {
    return <Button title="Login" color="red" onPress={() => {}} />;
  }

  render() {
    const {counter, isOpen} = this.state;
    console.log({counter});
    return (
      <View>
        <Text>{`ini state: ${this.state.name}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          <Button onPress={this.dec} title="Kurang" />
          <Text style={{width: 50, textAlign: 'center'}}>{counter}</Text>
          <Button onPress={() => this.increment()} title="Tambah" />
        </View>

        {isOpen ? <Text>sedang di buka</Text> : <Text>toko sedang tutup</Text>}
        {isOpen ? this.renderName() : this.renderBtnLogin()}
      </View>
    );
  }
}

export default App;
