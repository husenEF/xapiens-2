import {gql} from '@apollo/client';

const ADD_USER = gql`
  mutation($name: String!) {
    insert_users_one(object: {name: $name}) {
      name
      id
    }
  }
`;

const GET_TASK_BY_USER = gql`
  query($userId: Int!) {
    task(where: {userId: {_eq: $userId}}) {
      userId
      name
      status
      User {
        username: name
      }
    }
  }
`;

export default {
  add: ADD_USER,
  taskById: GET_TASK_BY_USER,
};
