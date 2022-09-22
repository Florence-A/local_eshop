// exports routes to the server
module.exports = (app)=> {
    // link to modules
    const product = require('../controllers/productController');
    const router = require('express').Router();

    // routes
    router.post('/new/', product.create);
    router.post('/image/', product.image);
    router.get('/', product.list);
    router.get('/product/:id', product.getOne);

    // use router with '/products' prefix
    app.use('/products', router);
}