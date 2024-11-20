const mongoose = require('mongoose')
function RunServer(){
    try{
        mongoose.connect('mongodb://localhost:27017/');
        console.log("MongoDB connected")
    }
    catch (error){
        console.log('Not connected')
    }
}
module.exports = RunServer;

