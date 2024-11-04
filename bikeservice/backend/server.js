const express = require('express')
const app= express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

app.use(cors()) 
app.use(express.json())

const routerr = require('./route/routes')
//Its used to connect with the database
mongoose.connect("mongodb+srv://loga:loga@myserver.in18m.mongodb.net/bikeservice?retryWrites=true&w=majority&appName=myserver")
.then(()=>{
    app.listen(4000,()=>{
        console.log(`Listening port 4000`)
    })
})
.catch((err)=>{
    console.log(err)
})

app.use('/api',routerr)

