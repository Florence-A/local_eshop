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
            name            : req.body.name,
            _ref            : req.body.ref,
            description     : req.body.description,
            HT_price        : req.body.HT_price,
            lead_time       : req.body.lead_time,
            tva_id          : "",
            overdue_date_id : ""
        }
        
        const productRelations = {
            img_path        : req.body.img_path,
            tva_rate        : req.body.tva_rate,
            overdue_date    : req.body.overdue_date,
            categories      : [{ catParent: req.body.parentCategory }, { catChild: req.body.childCategory }],
            features        : [{ feature: req.body.feature1, feature_value: req.body.feature_value1 }, { feature: req.body.feature2, feature_value: req.body.feature_value2 }]
        }
       

        models.Tva.findOne({
            where : { rate: productRelations.tva_rate }
        }) .then(tvaFound =>{
            if( tvaFound ){
                product.tva_id = tvaFound.dataValues.id
                return
            }
            res.status(400).json({ "error" : "tva doesn't exist" })
        }) .catch(err => { res.status(501).json({ "cannot find tva: " : "" + err })})
        
        models.Overdue_date.findOne({
            where : { time: productRelations.overdue_date }
        }).then(o_dateFound =>{
            if( o_dateFound ){
                product.overdue_date_id = o_dateFound.dataValues.id
                return
            }
            res.status(400).json({ "error" : "overdue date doesn't exist" })
        }) .catch(err => { res.status(501).json({ "cannot find overdue date: " : "" + err })})
        
        
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