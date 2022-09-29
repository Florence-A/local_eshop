//imports
const { sequelize } = require('../models');
const models = require('../models');
const formidable = require('formidable');
const path = require('path');
// const fs = require('fs');
const shapingUtils  = require('../utils/shapingUtils');


// product methods
module.exports = {
    test: async(req,res)=>{
        console.log(path.join(__dirname, '../public', `images/products/`)) 
    },
    // create a new product
    /////////////////////////////////////////////////////////////////////////////////////
    // 
    /////////////////////////////////////////////////////////////////////////////////////
    
    create: async (req,res)=> {

    try {

        const uploadFolder = path.join(__dirname, '../public', `images/products/`);
        const form = formidable({
            multiples: true,
                    keepExtensions: true,
                    maxFileSize: 50 * 1024 * 1024,
                    uploadDir: uploadFolder,
                    filter: ({mimetype})=>{
                        return mimetype && mimetype.includes("image");
                    }
        })
       
        form.parse(req, async (err, fields, files) => {   
            if (err) {
                throw err
            }
            // console.log(fields)
            // console.log(uploadFolder);return
            const newProduct = {
                name            : shapingUtils.toUpperCaseFirstLetter(fields.name),
                _ref            : `_ref_${Math.round(Math.random()*1000)}`, //random generated number for test... todo: créate a generating function
                description     : shapingUtils.escapeHtml(fields.description),
                HT_price        : fields.price,
                lead_time       : 4,
                tva_id          : fields.tva,
            }
            
            const productParams = {
                categories      : [ fields.parentCategoy, fields.childCategory ],
                features        : fields.features
            }

            for( el in fields){
                if( fields[el] === 'null' ){
                    return res.status(401).json({ "msg" : "Les champs Nom, Description, Categorie, Sous-categorie, Prix et TVA doivent être renseignés" })
                }
            }
           
            //create the new product
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

                    // await fs.promises.mkdir(uploadFolder, { recursive: true })
            
                    for( file in files ){
                        await models.Image.create(
                            { path: files[file].newFilename },
                            { transaction: t }
                        ).then(async newImageCreated =>{
                            await newProductCreated.addImage(
                                newImageCreated,
                                { transaction: t }
                            )
                        }) 
                    }// add images path
                    
                    res.status(201).json({ "msg": "produit ajouté"})
                })
            })
        
        })
    } catch (err) {
        console.log( err )
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
            where: { category_id: req.body.categ}
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

    //get tvas
    getTvas: (req,res)=>{
        models.Tva.findAll()
            .then(tvaFound =>{
                res.status(201).json(tvaFound)
        }).catch(err =>{
            res.status(500).json(err)
        })
    }

}