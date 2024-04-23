const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const { Login } = require('./schema.jsx')

const app = express()

app.use(bodyParser.json())
app.use(cors())

async function connecttoDB() {
    try {
        await mongoose.connect('mongodb+srv://Kamali:kamali_445@cluster0.qxlvbz0.mongodb.net/loginDetails?retryWrites=true&w=majority&appName=Cluster0');
        console.log("DB connection Established");
        const port = 8000 || process.env.PORT;
        app.listen(port, function () {
            console.log(`listening on port ${port}....`)
        });
    } catch (error) {
        console.log(error)
        console.log("Couldn't connect")
    }
}
connecttoDB()

app.post('/login',async function(request,response){
    
    try{
        console.log("hello")
        await Login.create({
            "email":request.body.email,
            "password":request.body.password
        })
        response.status(201).json({
            "status":"success",
            "message":"new entry created"
        })
    }catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"entry not created",
            "error":error
        })
    }
})
