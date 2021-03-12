import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const Show = React.memo(({label, val}) => {
  console.log(`${label} inside show render`);
  return (
    <View>
      <Text>
        {label} : {val}
      </Text>
    </View>
  );
});

const Btn = React.memo(({action, label}) => {
  console.log(`${label} inside BUtton render`);
  return <Button title={label} onPress={action} />;
});

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const [longLat, setLongLat] = useState({lat: 0, long: 0});

  useEffect(() => {
    //run to triger event longlat
  }, [longLat]);

  const inc = useCallback(() => {
    // console.log(counter);
    setCounter(counter + 1);
  }, [counter]);

  const dec = () => {
    // console.log('dec', counter);
    setCounter(counter - 1);
  };

  const incNum = () => {
    setNumber(number + 1);
  };
  const decNum = () => {
    setNumber(number - 1);
  };
  return (
    <View>
      <Text>Use state, useCallback,useMemo </Text>
      {/* <Button
        title="Inc"
        onPress={() => {
          inc();
        }}
      /> */}
      <Show label="Counter" val={counter} />
      <Btn label="Inc" action={inc} />
      <Btn label="dec" action={dec} />
      <Show label="Number" val={number} />
      <Btn label="Inc Num" action={incNum} />
      <Btn label="dec Num" action={decNum} />
    </View>
  );
};

export default Counter;
