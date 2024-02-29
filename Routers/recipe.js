const { createRecipe } = require("../Controllers/recipe");
const RecipeRouter = require("express").Router();
RecipeRouter.post("/create", createRecipe);
module.exports = RecipeRouter;