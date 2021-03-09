import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FormComponent, ListComponent} from '../../component';

class HomeScreen extends Component {
  state = {
    list: [],
    user: {},
  };

  componentDidMount() {
    this.getTodoList();
    // this.getAllData();
    // this.saveUser();
  }

  async saveUser() {
    try {
      await AsyncStorage.setItem(
        'user_data',
        JSON.stringify({name: 'huse', alamat: 'Jln Palagan'}),
      );
    } catch (error) {}
  }

  async getAllData() {
    try {
      const multiGet = await AsyncStorage.multiGet(['todo_list', 'user_data']);
      console.log({multiGet});
    } catch (error) {}
  }
  async getTodoList() {
    try {
      const stringJson = await AsyncStorage.getItem('todo_list');
      console.log({stringJson});
      if (stringJson !== null) {
        const jsonData = JSON.parse(stringJson);
        this.setState({list: jsonData});
      }
    } catch (error) {}
  }
  addTodo(text) {
    const {list} = this.state;
    const lastId = list.length > 0 ? list[list.length - 1].id : 1;
    const newTodo = {id: lastId + 1, text};
    list.push(newTodo);
    this.setState({list: list});
    AsyncStorage.setItem('todo_list', JSON.stringify(list));
  }

  addTodoExample(text) {
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
    const image = 'base 64 code dari image-nya';
  }

  async removeLocalStorage() {
    try {
      // await AsyncStorage.multiRemove(['todo_list', 'user_data']);
      await AsyncStorage.clear();
      console.log('Remove done');
    } catch (error) {
      console.log({error});
    }
  }

  componentWillUnmount() {
    this.removeLocalStorage();
  }

  render() {
    const {list} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'purple'}}>
        <Text>Home Screen</Text>
        <FormComponent action={(text) => this.addTodo(text)} />
        <ListComponent data={list} />
      </View>
    );
  }
}

export default HomeScreen;
