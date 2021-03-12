import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserReffExample = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    console.log('reff', inputRef.current);
  });
  useEffect(() => {
    console.log({name});
  }, [name]);

  return (
    <View>
      <Text>Ref Compoonent</Text>

      <TextInput
        value={name}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setName(text)}
        ref={inputRef}
      />
      <Button onPress={() => inputRef.current.clear()} title="reset" />
    </View>
  );
};
export default UserReffExample;
