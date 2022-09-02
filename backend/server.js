const express = require('express');
const helmet = require('helmet');
const app     = express();
const cors    = require('cors');
const port    = 9000;

// Import routers
const userRouter = require('./routes/user');


// Use
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(userRouter);


// Server start
app.listen(port,()=>{
    console.log(`Listen on ${port}`);
})