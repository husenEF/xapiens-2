import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

class FormComponent extends Component {
  state = {
    todo: '',
  };

  textHandler(text) {
    console.log({text});
    this.setState({todo: text});
  }

  actionSubmit = () => {
    const {action} = this.props;
    const {todo} = this.state;
    action(todo);
    this.setState({todo: ''});
  };

  render() {
    const {todo} = this.state;
    return (
      <View>
        <Text>Ini Form</Text>
        <TextInput
          value={todo}
          onChangeText={(text) => {
            this.textHandler(text);
          }}
        />
        <Button title="add todo" onPress={() => this.actionSubmit()} />
      </View>
    );
  }
}

export default FormComponent;
