//imports
const models = require('../models');

// product methods
module.exports = {
    
    // create a new product
    /////////////////////////////////////////////////////////////////////////////////////
    // fonctions à développer!!!! quelques actions pour test uniquement pour l'instant //
    /////////////////////////////////////////////////////////////////////////////////////
    // le 07/09 - gildas //
    create: async (req,res)=> {
        // create a product from params
        const newProduct = {
            name            : req.body.name,
            _ref            : req.body.ref,
            description     : req.body.description,
            HT_price        : req.body.HT_price,
            lead_time       : req.body.lead_time,
            tva_id          : req.body.tva_id,
        }
        
        const productParams = {
            img_path        : req.body.img_path, //just passing a path... will be an image upload with multiple actions - gildas - 15/09
            overdue_date    : req.body.overdue_date,
            categories      : [{ catParent: req.body.parentCategory_id }, { catChild: req.body.childCategory_id }],
            features        : [{ feature: req.body.feature1_id, feature_value: req.body.feature1_value_id }, { feature: req.body.feature2_id, feature_value: req.body.feature2_value_id }]
        }
       
    // check params before writing the newProduct in db
    // call to await function so the program waits for the checks are done before trying to write the bd
        
    async function checkParams() {
       
        await models.Tva.findByPk(
            newProduct.tva_id
        ).then(tvaFound =>{
            if( tvaFound ){
                return
            }
            res.status(400).json({ "error" : "tva doesn't exist" })
            return paramErr = "parameter value doesn't match"
        }).catch(err =>{ 
            res.status(501).json({ "cannot find tva: " : "" + err })
            return paramErr = "cannot find tva"
        })
        
        // await models.Overdue_date.create(
        //     { time: productParams.overdue_date }
        // ).then(o_dateCreated =>{ 
        //     newProduct.overdue_date_id = o_dateCreated.dataValues.id
        //     return
        // }).catch(err => {
        //     res.status(501).json({ "cannot create overdue date: " : "" + err })
        //     return paramErr = "cannot create overdue date"
        // })
        
        await models.Category.findByPk(
            productParams.categories[0].catParent
        ).then(async parentCategoryFound =>{
            if( parentCategoryFound ){
                const categs = await parentCategoryFound.getCategories()
                console.log(categs)
                return
            }
            res.status(400).json({ "error" : "parentCategory doesn't exist" })
            return paramErr = "parameter value doesn't match"
        }).catch(err => { res.status(501).json({ "cannot find parentCategory: " : "" + err })})
    
    }
    await checkParams();

    if( !paramErr ) {console.log(newProduct)}
    else {console.log(paramErr)}
    

        // models.Product.create(
        //     newProduct
        // ).then(productCreated =>{

        // }).catch(err =>{ res.status(501).json({ "cannot create product: " : "" + err }) })

        
    },

    // list all products with associated attributes
     /////////////////////////////////////////////////////////////////////////////////////
    //
    /////////////////////////////////////////////////////////////////////////////////////
    
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