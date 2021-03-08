import React, {Component} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';

const RenderList = ({color, data, onDoing}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View
          key={index}
          style={{
            backgroundColor: color || 'red',
            margin: 5,
            padding: 5,
            flexDirection: 'row',
          }}>
          <Text style={{flex: 4}}>{item.text}</Text>
          <Button
            style={{flex: 1}}
            title="Doing"
            onPress={() => onDoing(index)}
          />
        </View>
      )}
    />
  );
};

const Tab3 = (props) => {
  return (
    <View>
      <Text>Tab 3 </Text>
      <Button title="set tab 1" onPress={() => props.onPress()} />
    </View>
  );
};

class App extends Component {
  state = {
    todos: [],
    addTodo: false,
    todo: '',
    currentTab: 0,
  };

  saveTodo() {
    const {todo, todos} = this.state;
    const listTodo = todos;
    listTodo.push({text: todo, status: false});

    this.setState({todos: listTodo, todo: ''});
  }

  doingTodo(index) {
    console.log({index});
    const {todos} = this.state;
    // const undoneTodo = todos.filter(e=>!e.status)
    const updateTodo = todos.map((e, i) => {
      if (i === index) {
        e.status = true;
      }
      return e;
    });
    this.setState({todos: updateTodo});
  }

  openTab(e) {
    this.setState({currentTab: e});
  }

  rendeTab() {
    const {currentTab} = this.state;
    switch (currentTab) {
      case 3:
        return <Tab3 onPress={() => this.openTab(1)} />;
      case 2:
        return <Text>Tab 2</Text>;
      case 1:
      default:
        return <Text>Tab 1</Text>;
    }
  }

  render() {
    const {todos} = this.state;
    const unDone = todos.filter((e) => !e.status);
    const done = todos.filter((e) => e.status);
    console.log({
      unDone,
      done,
    });

    return (
      <View>
        <Text>Ini Main</Text>
        {/** render list undone*/}
        <RenderList data={unDone} onDoing={(item) => this.doingTodo(item)} />
        <Text>Undone List</Text>
        {/** render list done */}
        <RenderList
          color="blue"
          data={done}
          onDoing={(item) => this.doingTodo(item)}
        />
        <Button
          title="Add todo"
          color="purple"
          onPress={() => this.setState({addTodo: true})}
        />
        {this.state.addTodo && (
          <View style={{backgroundColor: 'green'}}>
            <TextInput
              onChangeText={(text) => this.setState({todo: text})}
              value={this.state.todo}
              style={{borderWidth: 1, borderColor: 'black'}}
            />
            <Button title="Save todo" onPress={() => this.saveTodo()} />
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          {[1, 2, 3].map((e) => (
            <Button
              title={`tab ${e}`}
              onPress={() => this.openTab(e)}
              key={e}
            />
          ))}
        </View>

        {this.rendeTab()}
      </View>
    );
  }
}

export default App;
