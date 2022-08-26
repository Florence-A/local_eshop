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
            tva_id: 1,
        }
        const category_id = req.body.category_id;

        const categ = models.Category.findByPk(category_id)
            .then( categ => {
                console.log(categ)
                models.Product.create(product)
                .then(productCreated => {
                    console.log(productCreated)
                    productCreated.addCategory(categ)
                    .then(categoryAdded => {
                        return res.status(201).json({ 'product': productCreated, 'relation': categoryAdded})
                    })
                    .catch(err => {
                        return res.status(500).json({ 'error': 'cannot create join table: ' + err})
                    })
                
                })
                .catch(err => {
                    return res.status(500).json({ 'error': 'cannot create product: ' + err })
                })
            })
            
            .catch (err => {
                return res.status(500).json({ 'error': 'cannot create category: ' + err })
            })

        
            
    },

    list: (req,res)=> {
        models.Product.findAll({
            include: Category
            })
            .then(productsFound => {
                return res.status(201).json(productsFound)
            })
            .catch(err => {
                return res.status(500).json({ 'error': 'cannot find products: ' + err})
            })
    }
}