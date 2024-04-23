const mongoose = require('mongoose')
const loginDetails = new mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }
})
const Login = mongoose.model('loginDetails',loginDetails)
module.exports = {Login}