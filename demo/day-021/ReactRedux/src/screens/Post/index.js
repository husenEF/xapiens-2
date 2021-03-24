import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {inc, changeName} from '../../redux/global/action';

class Post extends Component {
  componentDidMount() {
    console.log({props: this.props});
  }
  render() {
    return (
      <View>
        <Text>Post</Text>
        <Button title="Inc" onPress={() => this.props.inc()} />
        <Button
          title="change Name to Admin"
          onPress={() => this.props.changeName('Super admin')}
          color="green"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  inc,
  changeName,
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
// export default  Post;
