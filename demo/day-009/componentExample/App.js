import React from 'react';
import {View, Text} from 'react-native';

import Hello, {HelloName} from './src/component/Hello.component';
import Home from './src/component/Home.component';
import Footer from './src/component/footer/Footer.component';

class Apps extends React.Component {
  render() {
    return (
      <>
        <View>
          <Text>Parent Component</Text>
          {/* <Hello />
          <HelloName name="Husen" alamat="jln Palagan" />
          <HelloName name="Imam" /> */}
          <Hello>
            <Text>Child 1</Text>
            <Text>Child 2</Text>
            <HelloName name="Imam" />
          </Hello>
        </View>
        <Home />
        <Footer />
      </>
    );
  }
}

const RenderView = ({name, customStyle}) => (
  <View style={customStyle}>
    <Text>Text {name}</Text>
  </View>
);

const App = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1, flexDirection: 'row-reverse'}}>
      {/* <Text>Main</Text> */}
      <RenderView
        name="text 1"
        customStyle={{flex: 2, backgroundColor: 'red'}}
      />
      <RenderView
        name="text 2"
        customStyle={{flex: 1, backgroundColor: 'blue'}}
      />
      <RenderView
        name="text 3"
        customStyle={{flex: 5, backgroundColor: 'green'}}
      />
    </View>
  );
};

export default App;
