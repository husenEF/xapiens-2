import React, {Component, createRef} from 'react';
import {Button, TextInput, Text, View} from 'react-native';

class ClassReff extends Component {
  state = {val: ''};
  inpuRef = createRef();
  render() {
    return (
      <View>
        <TextInput
          ref={this.inpuRef}
          value={this.state.val}
          onChangeText={(text) => {
            this.setState({val: text});
          }}
        />
        <Button onPress={() => this.inpuRef.current.reset} title="reset" />
      </View>
    );
  }
}

export default ClassReff;


