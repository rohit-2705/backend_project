const { createRecipe, getAllRecipes, image } = require("../Controllers/recipe");
const upload = require("../Middleware/multerconfig");

const RecipeRouter = require("express").Router();
//1.create recipe
RecipeRouter.post("/recipecreate", createRecipe);

//2. get recipe
RecipeRouter.get("/getrecipe",getAllRecipes);

//3. image
RecipeRouter.post("/createimage", image, upload.single("file"), (req, res) => {

});
module.exports = RecipeRouter;