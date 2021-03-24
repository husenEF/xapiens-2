import {INC, UPDATE} from './constan';

const initialState = {
  count: 0,
  name: 'reafactory',
};

const globalreducer = (state = initialState, action) => {
  console.log({action});
  switch (action.type) {
       case INC:
      const {count} = state;

      return {...state, count: count + 1};

    case UPDATE:
      return {...state, name: action.value};
    default:
      return state;
  }
};

export default globalreducer;
