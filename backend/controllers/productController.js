//imports
const models = require('../models');

// product methods
module.exports = {
    
    create: (req,res)=> {
        // create a product from params
        const product = {
            _ref: req.body.ref,
            description: req.body.description,
            HT_price: req.body.HT_price,
            lead_time: req.body.lead_time,
        }

        models.Product.create(product);
    }
}