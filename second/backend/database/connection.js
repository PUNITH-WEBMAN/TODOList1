const mongoose = require('mongoose')
function RunServer(){
    try{
        mongoose.connect('mongodb+srv://puneethrajm45:jaXNAXvkzm7424zU@cluster0.qtaje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("MongoDB connected")
    }
    catch (error){
        console.log('Not connected')
    }
}
module.exports = RunServer;

