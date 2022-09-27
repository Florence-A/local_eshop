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
        
        
    // check params before writing the newProduct in db
    // call to await function so the program waits for the checks are done before trying to write the bd
    
        
    async function checkParams() {

         // create a product from params
         const newProduct = {
            name            : req.body.newProduct.name,
            _ref            : `_ref_${Math.round(Math.random()*1000)}`, //random generated number for test... todo: créate a generating function
            description     : req.body.newProduct.description,
            HT_price        : req.body.newProduct.price,
            lead_time       : 4,
            tva_id          : req.body.newProduct.tva,
        }
        
        const productParams = {
            // img_path        : req.body.newProduct.img_path, //just passing a path... will be an image upload with multiple actions - gildas - 15/09
            categories      : [],
            features        : req.body.newProduct.features
        }

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
            req.body.newProduct.parentCategory
        ).then(async parentCategoryFound =>{
            if( parentCategoryFound ){
                productParams.categories.push(parentCategoryFound.dataValues.id);
                const childCategories = await parentCategoryFound.getChild_category();
               
                await models.Category.findByPk(
                    req.body.newProduct.childCategory
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
        // for( feature of productParams.features ){
        //     await models.Feature.findByPk(
        //         feature.feature
        //     ).then(async featureFound =>{
        //         if( featureFound ){

        //             const featureValues = await featureFound.getFeature_values()

        //             await models.Feature_value.findByPk(
        //                 feature.feature_value
        //             ).then(feature_valueFound =>{
        //                 if( feature_valueFound ){
                            
        //                     for( element of featureValues ){
        //                         if( element.dataValues.id === feature_valueFound.dataValues.id ){
        //                             productParams.features.push(feature_valueFound.dataValues.id)
        //                             return
        //                         }
        //                         throw error = "feature value doesn't belong to feature";
        //                     }
                            
        //                 }
        //                 throw error = "parameter value doesn't match"
        //             })

        //         }else {
        //             throw error = "parameter value doesn't match"
        //         }
        //     })
        // }

    }
    
    try {

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
            
            if (err) {
                throw err
            }

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

    //get all parent categories 
    getParentCategories: (req,res)=> {
        models.Category.findAll({
            where: { category_id: null}
        }).then(foundCategories =>{
            res.status(201).json(foundCategories)
        }).catch(err =>{
            res.status(500).json(err)
        })
    },
    //get all child categories
    getChildCategories: (req,res)=> {
        models.Category.findAll({
            where: { category_id: req.body.newProduct.categ}
        }).then(foundCategories =>{
            res.status(201).json(foundCategories)
        }).catch(err =>{
            res.status(500).json(err)
        })
    },

    //get all features
    getFeatures: (req,res)=>{
        models.Feature.findAll(
            { include:{
                model: models.Feature_value,
                attributes: ['id', 'value']
               }  }
        )
        .then(features =>{
            res.status(201).json(features)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },
    getTvas: (req,res)=>{
        models.Tva.findAll()
            .then(tvaFound =>{
                res.status(201).json(tvaFound)
        }).catch(err =>{
            res.status(500).json(err)
        })
    }

}