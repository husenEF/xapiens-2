import React, {useState} from 'react';
import axios from 'axios';

///https://reqres.in/api/users
const useFetcher = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const getData = async (url = '') => {
    setLoading(true);
    await axios
      .get(url, config)
      .then(res => setResponse(res.data))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    error,
    response,
    getData,
  };
};

export default useFetcher;
