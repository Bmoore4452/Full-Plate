import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username
      email
      password
      recipes
    }
  }
`;

export const SAVE_RECIPE= gql`

`