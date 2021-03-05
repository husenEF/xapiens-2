import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Style from './style';

class Footer extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Text>Footer</Text>
      </View>
    );
  }
}

export default Footer;
