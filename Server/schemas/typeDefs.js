const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input SaveRecipe {
    user: ID
    title: String!
    recipeId: String!
    description: String
    image: String
    steps: [String]
  }

  type User {
    username: String!
    email: String!
    password: String!
    recipes: [String]
  }

  type Recipe {
    user: ID
    title: String!
    recipeId: String!
    description: String
    image: String
    steps: [String]
  }

  type Query {
    recipes: [Recipe]!
    recipe(recipeId: String): Recipe
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    saveRecipe(input: SaveRecipe): User
  }
`;

module.exports = typeDefs;
