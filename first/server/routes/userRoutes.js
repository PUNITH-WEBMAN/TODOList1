const express = require('express');
const { Register, Login } = require('../controlers/userctrl');


const userRouter = express.Router();
//we are storing express router function in variable 'router'

//http requests:
//post: insert(C)
//put: update(R)
//get:read(U)
//delete:delete(D)

//you define specific paths or routes (like /login and /register) on the router

//Each rote is linked to a function that tells it what to do when someone visit that path.

userRouter.post('/',Register )
//Register/Login it is exported from userCntrl
userRouter.post('/login',Login)

module.exports = userRouter