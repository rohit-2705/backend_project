const { createUserAccount,signInUser } = require("../Controllers/Users.controllers");

const UsersRouter = require("express").Router();

//1. Create user-Create account
UsersRouter.post("/create", createUserAccount); 
//2. login user
UsersRouter.post("/login", signInUser);



module.exports = UsersRouter;