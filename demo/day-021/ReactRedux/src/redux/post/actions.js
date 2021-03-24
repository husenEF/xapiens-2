import axios from 'axios';

import {GET_DETAIL, GET_POST, SET_DATA, SET_LOADING} from './constan';

export const setList = data => {
  return {type: SET_DATA, data};
};

export const setLoading = data => {
  return {type: SET_LOADING, data};
};

export const fetchPost = () => dispatch => {
  dispatch(setLoading(true));
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch(setList(res.data)))
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
