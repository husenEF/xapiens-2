import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Effect = () => {
  const [price, setPrice] = useState(0);
  const [counter, setCounter] = useState(0);
  const [priceFormat, setPriceFormat] = useState('Rp0,-');
  useEffect(() => {
    console.log({price});
    const stringCurrency = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    setPriceFormat(stringCurrency);
  }, [counter]);
  return (
    <View>
      <Text>use Effect </Text>
      <TextInput
        style={{padding: 5, borderWidth: 1, borderColor: '#cdcdcd'}}
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="number-pad"
      />
      <Text>Price: {priceFormat}</Text>
      <Text>counter : {counter}</Text>
      <Button
        title="Add"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
    </View>
  );
};

export default Effect;
