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
    query getRecipes {
        recipes {
            _id
            description
            image
            steps
            title
        }
    }
`;

export const QUERY_SINGLE_RECIPE = gql`
    query getRecipe($recipeId: ID!) {
        recipe(recipeId: $recipeId) {
            _id
            description
            image
            steps
            title
        }

    }
  }
`;
