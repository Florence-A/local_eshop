//imports
const express = require('express');
const helmet = require('helmet');
const app     = express();
const cors    = require('cors');
const port    = 9000;

// Import routers
const userRouter = require('./routes/user.routes');


// Use
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(userRouter);


//routes
// routes to product CRUD
require('./routes/product.routes')(app);

// synchronize with db
// const { sequelize } = require('./models');
// sequelize.sync()


// Server start
app.listen(port,()=>{
    console.log(`Listen on ${port}`);
})