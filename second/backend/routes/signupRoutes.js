const express = require('express');
const { Register, Login } = require('../controlers/signupCtrl');

const signupRouter = express.Router()

signupRouter.post('/',Register)
signupRouter.post('/login',Login)

module.exports = signupRouter;
