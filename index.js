const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const initiateDatabaseConnection = require("./dbconfig");

// configuring ENV variables
require("dotenv").config();

const HTTP_SERVER = express();
const PORT = 5000;
const HOSTNAME = "0.0.0.0";

//ENABLE CORS
HTTP_SERVER.use(cors());

//ENABLING BODY-PARSER
HTTP_SERVER.use(parser.json());

//Inject app_server
HTTP_SERVER.use("/", require("./app"));


//LISTENING TO SERVER
HTTP_SERVER.listen(PORT, HOSTNAME, ()=> {
    console.log(`server started listening at ${PORT}`);
    initiateDatabaseConnection();
});

//HTTP_SERVER.get("/", (req, res) => {
   // res.status(200).json({
    //    message: "sucessfully created",

   // });
//});