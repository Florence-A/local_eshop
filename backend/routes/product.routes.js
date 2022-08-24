module.exports = (app)=> {
    const product = require('../controllers/productController');
    const router = require('express').Router();

    router.post('/new/', product.create);
    router.get('/', product.list);





    app.use('/products', router);
}