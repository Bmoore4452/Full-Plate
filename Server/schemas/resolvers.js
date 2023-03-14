const { User, Recipe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    recipes: async () => {
      return await Recipe.find({});
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },
    users: async () => {
      return User.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
        console.log(args);
      return { token, user };
    },
    saveRecipe: async (parent, { input }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedRecipes: input },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No User');
      }

      const correctPW = await user.isCorrectPassword(password);
      console.log(correctPW);
      if (!correctPW) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
