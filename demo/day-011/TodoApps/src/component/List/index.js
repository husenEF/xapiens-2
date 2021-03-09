import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

const ListComponent = ({data}) => {
  console.log('List:', {data});

  const item = ({item, index, separators}) => {
    console.log({item, index, separators});
    return (
      <Text
        key={index.toString()}
        style={{borderWidth: 1, borderColor: 'red', margin: 5, padding: 10}}>
        {item.text} - {index}
      </Text>
    );
  };

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      {data.length > 0 ? (
        <FlatList
          refreshing={() => console.log('on refresh')}
          // initialScrollIndex={5}
          data={data}
          renderItem={item}
          key={({item}) => item.key.toString()}
          horizontal={false}
        />
      ) : (
        <Text>Data tidak ada</Text>
      )}
    </View>
  );
};

export default ListComponent;
