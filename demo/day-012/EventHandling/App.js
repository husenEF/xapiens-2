import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {ValidationLib} from './src/lib';
import {SnackBarComponent} from './src/component';

class App extends Component {
  state = {
    username: '',
    email: '',
    isValidEmail: false,
    showAlert: false,
    price: 0,
    priceFormat: '',
  };

  setValue(text = '') {
    if (text !== '') this.setState({username: text});
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange(key = '', val = '') {
    if (key !== '') {
      // if (key === 'email') {
      const isValid = ValidationLib(key, val);
      this.setState({isValidEmail: isValid});
      // }

      this.setState({[key]: val});
    }
  }

  handlePrice(text) {
    const price = parseInt(text);
    this.setState({price: text, priceFormat: `Rp${price.toFixed(2)}`});
  }

  sendData() {
    const {isValidEmail} = this.state;
    if (!isValidEmail) {
      this.setState({showAlert: true}, () => {
        setTimeout(() => this.setState({showAlert: false}), 5000);
      });
      // Alert.alert('Email belum Pas');
    }
  }

  render() {
    const {username, email, showAlert, price, priceFormat} = this.state;
    return (
      <View style={{flex: 1}}>
        <Text>Main app</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => this.handleChange('username', text)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => this.handleChange('email', text)}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Price"
          value={price}
          onChangeText={(text) => this.handlePrice(text)}
        />
        <Text>Your Price : {priceFormat}</Text>
        <Button onPress={() => this.sendData()} title="Kirim" />
        <SnackBarComponent
          isOpen={showAlert}
          message="Email belum Pas"
          action={(text) => {
            console.log('from snackbar action', text);
            this.setState({showAlert: false});
          }}
        />
      </View>
    );
  }
}

export default App;
