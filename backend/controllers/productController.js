//imports
const { sequelize } = require('../models');
const models = require('../models');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

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
            categories      : [req.body.parentCategory, req.body.childCategory],
            features        : [req.body.feature1_value_id, req.body.feature2_value_id]
        }

        const featureParams = [{ feature: req.body.feature1_id, feature_value: req.body.feature1_value_id }, { feature: req.body.feature2_id, feature_value: req.body.feature2_value_id }]

        
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

                        for( cat of childCategories ){
                            if( cat.dataValues.id === childCategoryFound.dataValues.id ){
                                productParams.categories.push(childCategoryFound.dataValues.id);
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
        console.log(featureParams)
        for( feature of featureParams ){
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
            ).then(async newProductCreated => {

                await newProductCreated.addCategories(
                    productParams.categories,
                    {  transaction: t }
                ); //add categories

                await newProductCreated.addFeature_values(
                    productParams.features,
                    {  transaction: t }
                ); //add features


                const uploadFolder = path.join(__dirname, '../public', `images/products/${newProductCreated.dataValues.id}`);
                await fs.promises.mkdir(uploadFolder, { recursive: true })

                const form = formidable({
                    multiples: true,
                    keepExtensions: true,
                    maxFileSize: 5 * 1024 * 1024,
                    uploadDir: uploadFolder,
                    filter: ({mimetype})=>{
                        return mimetype && mimetype.includes("image");
                    }
                })
        
                form.parse(req, async (err, fields, files) => {
                    console.log(files)
                    if (err) {
                        throw err
                    }
                    for( file in files ){
                        console.log(files[file].filepath)
                        await models.Image.create(
                            { path: files[file].filepath },
                            { transaction: t }
                        ).then(async newImageCreated =>{
                            newProductCreated.addImage(
                                newImageCreated,
                                { transaction: t }
                            )
                        }) 
                    }
                })
                res.status(201).json(newProductCreated)
            })
        })
        
    } catch (err) {
        res.status(500).json({"error": "" + err})
    }
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
    },

    //get all parentcategories 
    getParentCategories: (req,res)=> {
        models.Category.findAll({
            where: { category_id: null}
        }).then(foundCategories =>{
            res.status(201).json(foundCategories)
        }).catch(err =>{
            res.status(500).json(err)
        })
    },
    //get all features
    getChildCategories: (req,res)=> {
        console.log(req.body)
        models.Category.findAll({
            where: { category_id: req.body.categ}
        }).then(foundCategories =>{
            res.status(201).json(foundCategories)
        }).catch(err =>{
            res.status(500).json(err)
        })
    },

    //get all features
    getFeatures: (req,res)=>{
        models.Feature.findAll()
        .then(features =>{
            res.status(201).json(features)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    //get all features
    getFeatureValues: (req,res)=>{
        console.log(req.body)
        models.Feature_value.findAll({
            where: { id:req.body.feat }
        })
        .then(featureValues =>{
            res.status(201).json(featureValues)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }

}