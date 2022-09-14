//imports
const models = require('../models');

// product methods
module.exports = {
    
    // create a new product
    /////////////////////////////////////////////////////////////////////////////////////
    // fonctions à développer!!!! quelques actions pour test uniquement pour l'instant //
    /////////////////////////////////////////////////////////////////////////////////////
    // le 07/09 - gildas //
    create: (req,res)=> {
        // create a product from params
        const product = {
            name: req.body.name,
            _ref: req.body.ref,
            description: req.body.description,
            HT_price: req.body.HT_price,
            lead_time: req.body.lead_time,
            tva_id: 2,
            overdue_date_id: 1
        }
        const category_id = req.body.category_id;

        
        models.Product.create(product)
            .then(productCreated => {
                console.log(productCreated)
                productCreated.addCategory(category_id)
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
    },

    // list all products with associated attributes
    list: (req,res)=> {
        models.Product.findAll({
            include: [
            {
                model: models.Tva,
                attributes: ['rate']
            },
            {
                model: models.Overdue_date,
                attributes: ['time']
            },
            {
                model: models.Category,
                attributes: ['name'],
                include: [
                    {
                        model: models.Category,
                        attributes: ['name']
                    }
                ]
            },
            {
                model: models.Feature_value,
                attributes: ['value'],
                include: [
                    {
                         model: models.Feature,
                         attributes: ['name']
                    }
                ]
            },
            {
                model: models.Image,
                attributes: ['path']
            }
        ]
        })
            .then(productsFound => {
                return res.status(201).json(productsFound)
            })
            .catch(err => {
                return res.status(500).json({ 'error': 'cannot find products: ' + err})
            })
    },

    // get one product with associated attributes by pk
    getOne: (req,res)=> {
        models.Product.findByPk(req.params.id)
            .then( async productFound => {
                const tva = await productFound.getTva();
                const categories = await productFound.getCategories();
                const categoriesName = []
                categories.forEach(category => {
                    categoriesName.push(category.name)
                });
                console.log(categoriesName);
                // const image = productFound.getImage();

                const product = {
                    _ref: productFound._ref,
                    description: productFound.description,
                    HT_price: productFound.HT_price,
                    tva: tva.rate,
                    categories: categoriesName,
                }

                res.status(201).json(product)
            })
    }
}