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
            tva_id: 1
        }

        models.Product.create(product)
            .then(productCreated => {
               return res.status(201).json(productCreated);
            })
            .catch(err => {
                return res.status(500).json({ 'error': 'cannot create product: ' + err})
            })
    },

    list: (req,res)=> {
        models.Product.findAll({
            include: [{
                model: models.Tva,
                attributes: [ 'rate' ]
            }]
        })
            .then(productsFound => {
                return res.status(201).json(productsFound)
            })
            .catch(err => {
                return res.status(500).json({ 'error': 'cannot find products: ' + err})
            })
    }
}