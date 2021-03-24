import {INC, UPDATE} from './constan';

export const inc = () => {
  return {type: INC};
};
export const changeName = (name = '') => {
  return {type: UPDATE, value: name};
};
