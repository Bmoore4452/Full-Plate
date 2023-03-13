const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  // user that made the recipe
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    requred: true,
  },
  recipeId: {
    type: String,
    rquired: true,
  },
  description: {
    type: String,
  },
  // steps for recipe
  steps: [
    {
      type: String,
      required: true,
    },
  ],
  // link for image
  image: {
    type: String,
  },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
