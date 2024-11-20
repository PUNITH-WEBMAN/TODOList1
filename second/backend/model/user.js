const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        required : true,
        // minlength : 8
    }
},{timestamps:true})


// code of export-
const user = mongoose.model('user',userSchema)

module.exports = user;
