const mongoose = require('mongoose')
const schema = mongoose.Schema
//Structure for the user services
const serviceSchema = new schema({
    sname:{
        type:String,
    },
    status:{
        type:String,
        default:"incomplete"
    }
})

//Structure for the bike document
const bikeSchema = new schema({

name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
email : {
    type:String,
    required:true
},
services:[serviceSchema]


},{timestamps:true})

//Exporting the schema in the format of model
module.exports = mongoose.model("Auto",bikeSchema)
