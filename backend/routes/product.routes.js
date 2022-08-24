module.exports = (app)=> {
    const product = require('../controllers/productController');
    const router = require('express').Router();

    router.post('/new/', product.create);




    

    app.use('/products', router);
}