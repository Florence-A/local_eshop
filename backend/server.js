//imports
const express = require('express');
const app = express()
const port = 9000


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
// routes to product CRUD
require('./routes/product.routes')(app);

// synchronize with db
// const { sequelize } = require('./models');
// sequelize.sync()

// open server
app.listen(port,()=>{
    console.log(`Listen on ${ port }`)
})