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
            _ref            : `_ref_${Math.round(Math.random()*1000)}`, //random generated number for test... todo: créate a generating function
            description     : req.body.description,
            HT_price        : req.body.HT_price,
            lead_time       : req.body.lead_time,
            tva_id          : req.body.tva_id,
        }
        
        const productParams = {
            img_path        : req.body.img_path, //just passing a path... will be an image upload with multiple actions - gildas - 15/09
            categories      : [],
            features        : []
        }

        const paramFeat = [{ feature: req.body.feature1_id, feature_value: req.body.feature1_value_id }, { feature: req.body.feature2_id, feature_value: req.body.feature2_value_id }]
       
    // check params before writing the newProduct in db
    // call to await function so the program waits for the checks are done before trying to write the bd
    

        
    async function checkParams() {
               
        // is tva valid
        await models.Tva.findByPk(
            newProduct.tva_id
        ).then(tvaFound =>{
            if( tvaFound ){
                return
            }
            throw( error = "parameter value doesn't match" )
        })

        // is category valid
        await models.Category.findByPk(
            req.body.parentCategory_id
        ).then(async parentCategoryFound =>{
            if( parentCategoryFound ){
                
                const childCategories = await parentCategoryFound.getChild_category();
               
                await models.Category.findByPk(
                    req.body.childCategory_id
                ).then(childCategoryFound =>{

                    if( childCategoryFound ){

                        for( category of childCategories ){
                            if( category.dataValues.id === childCategoryFound.dataValues.id ){
                                return
                            }
                        }
                        throw error = "child category doesn't belong to parent category" 
                        
                    }
                    throw error= "parameter value doesn't match" 
            
                })
                
            } else {
                throw error = "parameter value doesn't match"
            }
        })
        
        // are features valid
        for( feature of paramFeat ){
            console.log(feature); 
            await models.Feature.findByPk(
                feature.feature
            ).then(async featureFound =>{
                if( featureFound ){

                    const featureValues = await featureFound.getFeature_values()

                    await models.Feature_value.findByPk(
                        feature.feature_value
                    ).then(feature_valueFound =>{
                        if( feature_valueFound ){
                            
                            for( element of featureValues ){
                                if( element.dataValues.id === feature_valueFound.dataValues.id ){
                                    productParams.features.push(feature_valueFound.dataValues.id)
                                    return
                                }
                                throw error = "feature value doesn't belong to feature";
                            }
                            throw error = "parameter value doesn't match"
                        }
                    })

                }else {
                    throw error = "parameter value doesn't match"
                }
            })
        }

    }
    
    try {
        await checkParams()

        await sequelize.transaction(async(t)=>{
            await models.Product.create(
                newProduct,
                {  tansaction: t }
            ).then(async productCreated =>{
                
                productCreated.addCategories(
                    productParams.categories
                )

                productCreated.addFeature_values(
                    productParams.features
                )

                await sequelize.transaction(async(t)=>{
                    await models.Image.create(
                        { path: productParams.img_path },
                        { tansaction: t }
                    ).then(imageCreated =>{
                        
                        productCreated.addImage(
                            imageCreated
                        )
                    })
                });

            })
        })
        
    } catch (err) {
        res.status(500).json({"error": "" + err})
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
        }).then(productsFound => {
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