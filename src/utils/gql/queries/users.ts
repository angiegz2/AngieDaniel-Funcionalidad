import { gql } from 'apollo-server-micro';

const GET_USERS = gql`
  query Query {
    users {
      role
      name
      image
      id
      email
      deleted
      eneabled
    }
  }
`;

const GET_USER_BY_ID = gql`
  query User($userId: String!) {
    user(id: $userId) {
      name
      email
      image
      role
      deleted
      eneabled
    }
  }
`;

export { GET_USERS, GET_USER_BY_ID };
