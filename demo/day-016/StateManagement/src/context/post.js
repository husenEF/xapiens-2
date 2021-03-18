import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';

import {getPost} from '@services/post';

export const PostContext = createContext();

const PostProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getPostData = async () => {
    setIsLoading(true);
    const raw = await getPost();
    console.log({raw});
    if (raw.length > 0) {
      setData(raw);
    } else {
      setData([]);
    }
    setIsLoading(false);
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => setData(response.data))
    //   .catch(error => setErrorMessage(error))
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const sendComment = () => {};

  const value = {
    data: {
      data,
      isLoading,
      error: errorMessage,
    },
    getPost: getPostData,
    sendComment,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
export const PostConsumer = () => useContext(PostContext);
export default PostProvider;
