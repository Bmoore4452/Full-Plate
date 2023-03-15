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
    _id: ID!
    username: String!
    email: String!
    password: String!
    recipes: [String]
  }

  type Recipe {
    _id: ID
    title: String!
    ingredients: [String]!
    description: String
    image: String
    steps: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    recipes: [Recipe]!
    recipe(recipeId: ID!): Recipe
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(input: SaveRecipe): User
    addRecipe(user: ID!,title: String!, ingredients: [String]!, description: String!, image: String!, steps: [String]!): Recipe
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
