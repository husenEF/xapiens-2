import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {FormComponent, ListComponent} from '../../component';

class HomeScreen extends Component {
  state = {
    list: [],
  };

  addTodo(text) {
    const {list} = this.state;
    const lastId = list.length > 0 ? list[list.length - 1].id : 1;
    const newTodo = {id: lastId + 1, text};
    list.push(newTodo);
    this.setState({list: list});

    // prepare form to backend
    // 1. json
    const formJson = {
      name: text,
      status: true,
      addres: 'jln palagan',
    };

    const axios = {};
    axios.post(
      '/endpoint/post/id',
      {...formJson},
      {
        headers: {
          'Content-Type': 'apliocation/json',
        },
      },
    );

    // cara 2
    const form = new FormData();
    form.append('name', text);
    form.append('addres', 'jalan palagan');
    axios.post('/endpoint', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    //cara 3 
    const image = "base 64 code dari image-nya"
  }

  render() {
    const {list} = this.state;
    return (
      <View>
        <Text>Home Screen</Text>
        <FormComponent action={(text) => this.addTodo(text)} />
        <ListComponent data={list} />
      </View>
    );
  }
}

export default HomeScreen;
