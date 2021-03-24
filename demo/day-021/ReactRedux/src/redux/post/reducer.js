import {GET_DETAIL, GET_POST, SET_DATA, SET_LOADING} from './constan';

const initialState = {
  list: [],
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return state;
      break;
    case GET_POST:
      return {...state, loading: true};
    case SET_LOADING:
      return {...state, loading: action.data};
    case SET_DATA:
      return {...state, list: action.data};
    default:
      return state;
      break;
  }
};

export default postReducer;
