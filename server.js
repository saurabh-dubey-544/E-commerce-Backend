/* The server.js file will be the starting point of the application */
const express = require("express")
const mongoose = require("mongoose")
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")
const user_model = require("./models/user.model")
const bcrypt = require("bcryptjs")

const app = express()


/* Create an admin user at the starting of the application if not already present */

// Connect with MongoDB
mongoose.connect(db_config.DB_URL)
const db = mongoose.connection

// If error while connecting
db.on("error", ()=>{console.log("Error while connecting to the Database.")})

// If the connection is successfull
db.once("open", ()=>{
    console.log("Connected to MongoDB")
    // Function to create admin
    init()
})

async function init(){
    try{
        // Checking if user is present or not
        let user = await user_model.findOne({userId : "admin"})
        // If user is already present
        if (user){
            console.log("Admin is already present")
            return 
        }
    }catch(err){
        console.log("Error while reading the user",err);
    }
    
    // If user is not present, then create it
    try{
        user = await user_model.create({
            name : "Saurabh",
            userId : "admin",
            email : "Saurabh@123",
            userType : "ADMIN",
            password : bcrypt.hashSync("Welcome123",8)  // encrypting the password
        })
        console.log("Admin created", user)
    }catch(err){
        console.log("Error while creating the admin",err)
    }
}






/* Start the Server */
app.listen(server_config.PORT , ()=>{
    console.log("Server has started at PORT Number :",server_config.PORT)
})