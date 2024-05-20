const mongoose = require("mongoose");

function initiateDatabaseConnection() {
    mongoose.connect("mongodb+srv://rohitrajuvulchi99:rohit99@cluster0.kxqeocn.mongodb.net/krm?retryWrites=true&w=majority&appName=Cluster0")
    .then((response) => {
        if (response.connections.length > 0){
            console.log("Database connection successfully")
        }
})
.catch((error) => {
    if (error){
        console.log("Error connecting database", error);
        }
    });
}


module.exports = initiateDatabaseConnection;