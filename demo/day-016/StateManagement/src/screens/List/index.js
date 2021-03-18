import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {CounterConsumer} from '@contexts/counter';
import PosProvider, {PostConsumer} from '@contexts/post';
import {useUser} from '@contexts/user';

const ListPost = () => {
  // const {idUser} = CounterConsumer();
  const {
    data: {
      user: {id, name, username, email},
    },
  } = useUser();
  const {
    getPost,
    data: {data, isLoading, error},
  } = PostConsumer();
  //   console.log('list', {value});

  const [list, setList] = useState([]);

  useEffect(() => {
    getPost();
  }, []);
  useEffect(() => {
    const a = data.filter(item => item.userId === id);
    setList(a);
  }, [data]);

  console.log({list, id});
  return (
    <View>
      <View>
        <Text>Detail User</Text>
        <Text>Name : {name}</Text>
        <Text>Email : {email}</Text>
      </View>
      <Text>List Post</Text>
      {isLoading && <ActivityIndicator color="blue" />}
      {list.length > 0 && (
        <FlatList
          data={list}
          renderItem={({item}) => {
            console.log({item});
            // return null;
            return <Text key={item.id.toString()}>{item.title}</Text>;
          }}
        />
      )}
    </View>
  );
};

export default props => (
  <PosProvider>
    <ListPost {...props} />
  </PosProvider>
);
