const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    rating : {
        type : Number,
        required : true,
        min : 0,
        max : 5
    },

    lat : {
        type : Number,
        require : true
    },

    long : {
        type : Number,
        require : true
    }
    
});

module.exports = mongoose.model("reviewForm", reviewSchema);