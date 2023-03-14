import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      username
      email
      password
      recipes
    }
  }
`;

export const QUERY_USER = gql`
  query User($username: String) {
    user(username: $username) {
      username
      email
      password
      recipes
    }
  }
`;

export const QUERY_RECIPES = gql`
  query recipes {
    recipes {
      description
      image
      steps
      title
    }
  }
`;
