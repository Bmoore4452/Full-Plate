import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_RECIPE = gql`
    mutation addRecipe($user: ID!, $title: String!, $ingredients: [String]!, $description: String!, $image: String!, $steps: [String]!) {
        addRecipe(user: $user, title: $title, ingredients: $ingredients, description: $description, image: $image, steps: $steps) {
            _id
            description
        }
    }
`;