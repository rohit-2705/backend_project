const express = require("express");
const APP_SERVER = express();

// INJECTING ALL THE ROUTERS
APP_SERVER.use("/api/auth", require("./Routers/users.router"));
APP_SERVER.use("/api/recipe", require("./Routers/recipe"));
module.exports = APP_SERVER;
