const express = require('express')
require ('dotenv').config()
// CREATING EXPRESS APP
const app =express()

// app port
const port = process.env.port||4000

app.listen(port,()=>)