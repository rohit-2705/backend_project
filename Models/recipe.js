const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    recipename:{
        type: String,
        required:true
    },
    ingredients:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    instructions:{
        type:String,
        required:true,
    },
    imageurl:{
        type:String,
        required:true
    },
    cookingtime:{
        type:Number,
        required:true,
    },
    recipeowner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true,
    },
});

const Recipe = mongoose.model("recipe", RecipeSchema);
module.exports = Recipe;