// require mongoose 
const mongoose = require("mongoose")

// schema
const {Schema} = mongoose

//  user schema
const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    }
})