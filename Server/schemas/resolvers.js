const { User, Recipe } = require('../models');

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

      return user;
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
  },
};

module.exports = resolvers;
