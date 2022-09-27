// exports routes to the server
module.exports = (app)=> {
    // link to modules
    const product = require('../controllers/productController');
    const router = require('express').Router();

    // routes
    router.post('/new/', product.create);
    router.get('/', product.list);
    router.get('/product/:id', product.getOne);
    router.get('/parentCategories/', product.getParentCategories);
    router.post('/childCategories/', product.getChildCategories);
    router.get('/features/', product.getFeatures);
    router.post('/featureValues/', product.getFeatureValues);

    // use router with '/products' prefix
    app.use('/products', router);
}