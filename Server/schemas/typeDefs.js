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
    _id: ID
    title: String!
    recipeId: String!
    description: String
    image: String
    steps: [String]
  }

  type Query {
    recipes: [Recipe]!
    recipe(recipeId: ID!): Recipe
    users: [User]
    user(username: String): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    saveRecipe(input: SaveRecipe): User
    login(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
