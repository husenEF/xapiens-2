import Api from './init';

export const getPost = async (id = null) => {
  return await Api.get('posts')
    .then(r => r.data)
    .catch(e => e);
};
