//imports
const express = require('express');
const helmet = require('helmet');
// const cors    = require('cors');
const path    = require('path')

const port    = 9000;
const app     = express();

// Import routers
const userRouter = require('./routes/user.routes');


// Use
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cors());
app.use(userRouter);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(express.static(path.join(__dirname, 'public')))


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