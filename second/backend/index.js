// entttrey point for express

const express = require('express');
const RunServer = require('./database/connection');
const cors = require('cors')
const signupRouter = require('./routes/signupRoutes')



const app = express()
const port  = 5000;

RunServer()

app.use(express.json());
app.use(cors())


app.use('/api/user', signupRouter)

app.listen(port, () => {
    console.log(`server is running on ${port} port!`)
})