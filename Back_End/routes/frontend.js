const express=require('express')

// create a route
const app= express.Router()

app.get('/',(req, res)=>{
    res.send("It is working")
})

// creating a resource in the db
app.post('/posts/create', (req, res)=>{
    res.json(req.body)
})


// creating a resource 
app.get('/posts',(req,res)=>{
    res.send('all posts')
})
// export router
module.exports=app
