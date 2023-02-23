const express = require('express')
require ('dotenv').config()
const frontendRoute = require('./routes/frontend')
// CREATING EXPRESS APP
const app =express()


// creating 
app.use(express.urlencoded({extended:false}))

// app port
const port = process.env.port||4000

// frontend routes
app.use('/', frontendRoute)

app.listen(port,()=>{
    console.log(`Server started`)
})