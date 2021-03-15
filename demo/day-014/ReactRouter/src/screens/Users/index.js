import React from 'react';
import {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const UserScreen = props => {
  console.log({props});
  const {
    navigation,
    route: {params},
  } = props;

  const name = params !== undefined ? params.name : 'Default';

  useEffect(() => {
    navigation.setOptions({title: `Hai ${name}`});
  }, []);
  return (
    <View>
      <Text>Halo {name}</Text>
      <Button
        title="To About"
        onPress={() =>
          navigation.navigate('About', {id: 10, nama: 'refactory'})
        }
      />
    </View>
  );
};

export default UserScreen;
