const express = require('express')
const routerr = express.Router()
//Importing all the controller functions
const { signup, signin, setService, statusUpdate, getAll } = require('../controller/controller')
//Mapping the end point
routerr.get('/',getAll)
routerr.post('/register',signup)
routerr.post('/login',signin)
routerr.post('/service',setService)
routerr.patch('/updateStatus',statusUpdate)
//Export the router
module.exports = routerr
