const express = require('express')
const submitMessage = require('../controlers/contactctrl')

const contactRouter = express.Router()

contactRouter.post('/submit',submitMessage)


module.exports = contactRouter