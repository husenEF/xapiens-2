import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = props => {
  console.log({props});
  const {navigation} = props;
  useEffect(() => {
    navigation.openDrawer();
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="To About"
        onPress={() =>
          navigation.navigate('About', {id: 10, nama: 'refactory'})
        }
      />
      <Button
        title="To User Detail"
        onPress={() => navigation.navigate('User', {id: 10, name: 'refactory'})}
      />
      <Button
        title="Update Title Header"
        onPress={() => navigation.setOptions({title: 'Title by Button'})}
      />
    </View>
  );
};

export default HomeScreen;
