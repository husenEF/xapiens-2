import React, {useState} from 'react';

const useLibCount = (n = 0) => {
  const [counter, setCounter] = useState(n);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return {
    counter,
    increment,
    decrement,
  };
};

export default useLibCount;
