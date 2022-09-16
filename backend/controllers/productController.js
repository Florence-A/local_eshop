//imports
const { sequelize } = require('../models');
const models = require('../models');

// product methods
module.exports = {
    
    // create a new product
    /////////////////////////////////////////////////////////////////////////////////////
    // 
    /////////////////////////////////////////////////////////////////////////////////////
    
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
            categories      : [{ catParent: req.body.parentCategory_id }, { catChild: req.body.childCategory_id }],
            features        : [{ feature: req.body.feature1_id, feature_value: req.body.feature1_value_id }, { feature: req.body.feature2_id, feature_value: req.body.feature2_value_id }]
        }
       
    // check params before writing the newProduct in db
    // call to await function so the program waits for the checks are done before trying to write the bd
    

        
    async function checkParams() {
        
        await sequelize.transaction(async(t)=>{

       
        // is tva valid
        await models.Tva.findByPk(
            newProduct.tva_id,
            { tansaction: t }
        ).then(tvaFound =>{
            if( tvaFound ){
                return
            }
            throw( error = "parameter value doesn't match" )
            // res.status(400).json({ "error" : "tva doesn't exist" })
            // return paramErr = "parameter value doesn't match"
        })
        .catch(err =>{ 
            // res.status(501).json({ "cannot find tva: " : "" + err })
            throw( error = err )
        })

        // is category valid
        await models.Category.findByPk(
            productParams.categories[0].catParent
        ).then(async parentCategoryFound =>{
            if( parentCategoryFound ){
                
                const childCategories = await parentCategoryFound.getCategories()
                
                await models.Category.findByPk(
                    productParams.categories[1].catChild
                ).then(childCategoryFound =>{
                    if( childCategoryFound ){
                    // console.log(childCategories)
                        for( category of childCategories ){
                            
                            if( category.dataValues.id === childCategoryFound.dataValues.id ){
                                return
                            }
                        }
                        throw( error = "child category doesn't belong to parent category" )    
                        
                    }
                    throw( error= "parameter value doesn't match" )
                }).catch(err =>{ 
                    throw( error = err )  
                })

            } else {
                throw( error = err )
            }
            
        }).catch(err =>{ 
            throw( error = err )
        })
        
        // are features valid
        for( feature of productParams.features ){
            await models.Feature.findByPk(
                feature.feature
            ).then(async featureFound =>{
                if( featureFound ){

                    const featureValues = await featureFound.getFeature_values()

                    await models.Feature_value.findByPk(
                        feature.feature_value
                    ).then(feature_valueFound =>{
                        if( feature_valueFound ){
                            console.log(feature_valueFound.dataValues.value)
                            for( element of featureValues ){
                                if( element.dataValues.id === feature_valueFound.dataValues.id ){
                                    console.log(element.dataValues.id)
                                    console.log(feature_valueFound.dataValues.id)
                                    return
                                }
                                res.status(400).json({ "error" : "feature value doesn't belong to feature" })
                                return paramErr = "feature value doesn't belong to feature"
                            }
                            res.status(400).json({ "error" : "feature value doesn't exist" })
                            return paramErr = "parameter value doesn't match"
                        }
                    }).catch(err =>{ 
                        res.status(501).json({ "cannot find feature_value: " : "" + err })
                    })

                }else {
                    res.status(400).json({ "error" : "feature doesn't exist" })
                    return paramErr = "parameter value doesn't match"
                }
            }).catch(err =>{ 
                res.status(501).json({ "cannot find feature: " : "" + err })
            })
        }

        });
    }
    
    try {
        await checkParams();
        if(typeof paramErr === 'undefined' ) {console.log(newProduct)}
        else {console.log(paramErr)}
    } catch (err) {
        console.log(err)
    }
    

    
    

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
                res.status(201).json(productFound)
            })
    }
}