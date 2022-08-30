const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 9000

// Import routers
const userRouter = require('./routes/user')


// Use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// bodyParser remplace express
app.use(userRouter)


// Server start
app.listen(port,()=>{
    console.log(`Listen on ${port}`)
})