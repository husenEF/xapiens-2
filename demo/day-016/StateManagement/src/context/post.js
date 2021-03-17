import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';

export const PostContext = createContext();

const PostProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getPost = async () => {
    setIsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => setErrorMessage(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const value = {
    data: {
      data,
      isLoading,
      error: errorMessage,
    },
    getPost,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
export const PostConsumer = () => useContext(PostContext);
export default PostProvider;
