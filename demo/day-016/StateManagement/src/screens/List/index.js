import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {CounterConsumer} from '@contexts/counter';
import {PostConsumer} from '@contexts/post';

const ListPost = () => {
  const {idUser} = CounterConsumer();
  const {
    data: {data, isLoading, error},
  } = PostConsumer();
  //   console.log('list', {value});

  const [list, setList] = useState([]);
  useEffect(() => {
    const a = data.filter(item => item.userId === idUser);
    setList(a);
  }, [data]);

  console.log({list, idUser});
  return (
    <View>
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

export default ListPost;
