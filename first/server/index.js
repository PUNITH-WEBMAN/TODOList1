// entttrey point for express

const express = require('express');
const RunServer = require('./database/connection');
const userRouter = require('./routes/userroutes');
const contactRouter = require('./routes/contactRoute');
const cors = require('cors')


const app = express()
const port  = 3000;

app.use(express.json());

app.use(cors())

RunServer()

app.use('/user',userRouter)
app.use('/contact',contactRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port} port`)
})
