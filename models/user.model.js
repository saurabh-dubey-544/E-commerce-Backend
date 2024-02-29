const mongoose = require("mongoose")


/* I want to track user's name , email , password , userId , userType */
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unique : true
    },
    userType : {
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]  // possible userType value. Other values not allowed.
    }
},{
    timestamps : true,
    versionKey : false
})

// Creating a collection "Users" in which our users will get stored and then converting into a Module
module.exports = mongoose.model("User",userSchema)  // It'll make it USers by itself.