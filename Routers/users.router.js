const { createUserAccount,signInUser,forgetpassword, newpassword } = require("../Controllers/Users.controllers");
const { verifyToken} = require("../Middleware/auth");
const UsersRouter = require("express").Router();

//1. Create user-Create account
UsersRouter.post("/create", createUserAccount); 
//2. login user
UsersRouter.post("/login", signInUser);
//3. forgetpassword
UsersRouter.post("/forgetpassword", forgetpassword)
//4. newpasswprd
UsersRouter.patch("/newpassword", newpassword);



module.exports = UsersRouter;