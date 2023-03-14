const db = require("../config/connection");
const { User, Recipe } = require("../models");

const userData = require("./userData.json");
const recipeData = require("./recipeData.json");

db.once("open", async () => {
    await User.deleteMany({});
    await Recipe.deleteMany({});

    const users = await User.insertMany(userData);
    const recipes = await Recipe.insertMany(recipeData);

    for (let i = 0; i < users.length; i++) {
        const tempUser = users[i];
        tempUser.recipes.push(recipes[i]._id);
        await tempUser.save();
        const tempRecipe = recipes[i];
        tempRecipe.user = tempUser._id;
        await tempRecipe.save();
    }

    console.log("all done");
    process.exit(0);
});