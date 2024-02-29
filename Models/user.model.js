const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phonenumber:{
        type: Number,
        required:true,
    },
    savedRecipes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recipe", required:true,
    },

});

const Usermodel = mongoose.model("user", UserSchema);

module.exports = Usermodel;