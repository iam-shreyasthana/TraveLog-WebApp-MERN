const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    userFirstName : {
        type : String,
        required : true
    },

    userLastName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    confirmPassword : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("userForm", userSchema);