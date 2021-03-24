export const inc = () => {
  return {type: 'INC'};
};
export const changeName = (name = '') => {
  return {type: 'UPDATE_NAME', value: name};
};
