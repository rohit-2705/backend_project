const Recipe = require("../Models/recipe");

function createRecipe(req, res, next) {
    const payload = req.body;
    const recipe = Recipe(payload);
  
    recipe
      .save()
      .then((response) => {
        if (response && response._id) {
          return res.status(201).json({
            success: true,
            message: "Recipe created successfully",
          });
        } else {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          return res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error,
          });
        }
      });
  }
  function getAllRecipes(req, res, next) {
    Recipe.find()
      .then((response) => {
        if (response && response.length > 0) {
          return res.status(201).json({
            success: true,
            data: response,
            message: "Recipe fetched successfully",
            length: response.length,
          });
        } else {
          return res.status(500).json({
            success: true,
            message: "No recipes found",
          });
        }
      })
      .catch((error) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error,
          });
        }
      });
  }
  function getRecipebyId(req, res, next) {
    const { docId = "" } = req.params;
    Recipe.findOne({ _id: docId })
      .then((response) => {
        if (response && response._id) {
          return res.status(201).json({
            success: true,
            data: response,
            message: "Recipe fetched successfully",
          });
        } else {
          return res.status(500).json({
            success: true,
            message: "No recipe found",
          });
        }
      })
      .catch((error) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error,
          });
        }
      });
  }
  
  module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipebyId,
  };