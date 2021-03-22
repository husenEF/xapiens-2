import {gql} from '@apollo/client';

const ADD_USER = gql`
  mutation($name: String!) {
    insert_users_one(object: {name: $name}) {
      name
      id
    }
  }
`;


export default {
  add: ADD_USER,
};
