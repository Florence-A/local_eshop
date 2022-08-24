const express = require('express');


const app = express()

const port = 9000


app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.listen(port,()=>{
    console.log(`Listen on ${port}`)
})