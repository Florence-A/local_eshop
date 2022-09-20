//imports
const { sequelize } = require('../models');
const models = require('../models');
const category = require('../models/category');
const formidable = require('formidable');
const path = require('path');

// product methods
module.exports = {

    image: (req,res)=> {

        const form = formidable({})
        const uploadFolder = path.join(__dirname, '../public', 'images');

        form.options.multiples   = true;
        form.options.keepExtensions   = true;
        form.options.maxFileSize = 5 * 1024 * 1024;
        form.uploadDir   = uploadFolder;
        const newFilename    = `_ref_${Math.round(Math.random()*1000)}`;

        // console.log(form)

        form.parse(req, async (err, fields, files) => {
            console.log(fields);
            console.log(files);
            if (err) {
              console.log("Error parsing the files");
              return res.status(400).json({
                status: "Fail",
                message: "There was an error parsing the files",
                error: err,
              });
            }
            
        });
       
        // console.log('await')

    },
    
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
                
                productParams.categories.push(parentCategoryFound.dataValues.id);
                const childCategories = await parentCategoryFound.getChild_category();
               
                await models.Category.findByPk(
                    req.body.childCategory_id
                ).then(childCategoryFound =>{

                    if( childCategoryFound ){

                        for( category of childCategories ){
                            if( category.dataValues.id === childCategoryFound.dataValues.id ){
                                productParams.categories.push(childCategoryFound.dataValues.id);
                                return
                            }
                        }
                        throw error = "child category doesn't belong to parent category" 
                        
                    }
                    // throw error= "parameter value doesn't match" 
            
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
                            
                        }
                        throw error = "parameter value doesn't match"
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
                {  transaction: t }
            ).then(async newProductCreated =>{

                newProductCreated.addCategories(
                    productParams.categories
                ); //add categories

                newProductCreated.addFeature_values(
                    productParams.features
                ); //add features

                await sequelize.transaction(async(t)=>{
                    await models.Image.create(
                        { path: productParams.img_path },
                        { transaction: t }
                    ).then(async newImageCreated =>{
                        newProductCreated.addImage(
                            newImageCreated
                        )
                    })
                }); //create new image(s) and add it
                    
                console.log("await")
                res.status(201).json(newProductCreated)
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
                through: {
                    attributes: []
                },
                include: [
                    {
                        model: models.Category,
                        as: 'child_category',
                        attributes: ['name']
                    }
                ]
            },
            {
                model: models.Feature_value,
                attributes: ['value'],
                through: {
                    attributes: []
                },
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
        models.Product.findByPk(
            req.params.id,{
            include: [
            {
                model: models.Tva,
                attributes: ['rate']
            },
            {
                model: models.Category,
                attributes: ['name'],
                through: {
                    attributes: []
                },
                include: [
                    {
                        model: models.Category,
                        as: 'child_category',
                        attributes: ['name']
                    }
                ]
            },
            {
                model: models.Feature_value,
                attributes: ['value'], 
                through: {
                    attributes: []
                },
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
        }).then(productFound => {
            return res.status(201).json(productFound)
        })
        .catch(err => {
            return res.status(500).json({ 'error': 'cannot find product: ' + err})
        })
    }
}