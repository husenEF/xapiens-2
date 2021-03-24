import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {inc, changeName} from '../../redux/global/action';
import {fetchPost} from '../../redux/post/actions';

class Post extends Component {
  componentDidMount() {
    // console.log({props: this.props});
  }
  render() {
    const {
      post: {list, loading},
    } = this.props;

    console.log({list, loading});
    return (
      <View>
        <Text>Post</Text>
        <Button title="Inc" onPress={() => this.props.inc()} />
        <Button
          title="change Name to Admin"
          onPress={() => this.props.changeName('Super admin')}
          color="green"
        />
        <Button
          title="Fetch Post"
          onPress={() => this.props.fetchPost()}
          color="green"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = {
  inc,
  changeName,
  fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
// export default  Post;
