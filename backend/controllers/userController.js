// Imports
require('dotenv').config();

const { sequelize } = require('../models');
const models        = require('../models');
const bcrypt        = require ('bcrypt');
const userUtils     = require('../utils/userUtils');
// const shapingUtils  = require('../utils/shapingUtils');

// Constants
const EMAIL_REGEX    = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// const PHONE_REGEX    = /^0[1-9]{1}(([0-9]{2}){4})$/;
// const STREET_REGEX   = /^[a-zA-Z -]*$/;
// const PC_REGEX       = /^[0-9]{5}$/;
// const CITY_REGEX     = /^[a-zA-Z -]*$/;



// User methods
module.exports = {


    addUser : (req,res) => 
    {
        // Params and shapping
        const role       = req.body.admin === "true" ? 2 : 1;
        const mail        = req.body.mail;
        const password    = req.body.password;

        if (!EMAIL_REGEX.test( mail )){
            return res.json({
                 'msg' : "Merci de vérifier l'adresse mail" 
                });
        };

        // if (!PASSWORD_REGEX.test( password )){
        //     return res.json({ 
        //         'msg' : "Le mot de passe doit contenir au minimum 8 caractères dont au moins un chiffre, une minuscule et une majuscule."});
        // };

        // Check if user already exists
        models.User.findOne({
            attributes : [ 'mail' ],
            where      : { mail: mail }
        })

        .then(( userFound ) => {

            if ( !userFound ) {
                
                // Secure the password
                var salt           = bcrypt.genSaltSync(10);
                var hashedPassword = bcrypt.hashSync( password, salt );
                
                // Register ----
                try {

                    sequelize.transaction(async(t)=>{

                        // Create the user
                        const newUser = await models.User.create({
                            mail        : mail,
                            password    : hashedPassword,
                            id_role     : role
                            },
                            {transaction : t}
                        )
                        .then(()=>{res.status(201)
                                        .json({ 'msg' : "Votre inscription a bien été prise en compte, merci de vous connecter avec vos nouveau identifiants" }) 
                        })
                    })                    
                }
                catch (error) {
                    console.log( "Rollback "+ error )
                }

            }
            else {
                return res.json({ 
                    'msg' : "Adresse mail déjà utilisée"});
            }
        })
    },

    updateUser : (req,res) => 
    {
        // Params and shapping
        
        const last_name   = shapingUtils.escapeHtml(req.body.last_name.trim().toUpperCase());
        const first_name  = shapingUtils.escapeHtml(shapingUtils.toUpperCaseFirstLetter(req.body.first_name));
        const phone       = req.body.phone;
        const number      = req.body.number;
        const street_name = shapingUtils.escapeHtml(req.body.street_name.trim());
        const postal_code = req.body.postal_code;
        const city        = req.body.city.trim().toUpperCase();

        // Check form
        if ( last_name == "" || first_name == "" || mail == "" || password == "" ||
             phone == ""     || street_name == ""|| postal_code == "" || city == "") {
            return res.json({ 
                'msg' : "Merci de remplir tous les champs du formulaire (le N° de rue n'est pas obligatoire)" 
            });
        }; 

        if ( !( 2 < last_name.length < 23 ) || !( 2 < first_name.length < 23 ) ){
            return res.json({ 
                'msg' : "Les noms et prénoms ne peuvent comprendre qu'entre 3 et 22 caractères" 
            });
        };

        if (!PHONE_REGEX.test( phone )){
            return res.json({ 
                'msg' : "Merci de vérifier le numéro de téléphone" 
            });
        };

        if (!STREET_REGEX.test( street_name )){
            return res.json({ 
                'msg' : "Le nom de rue ne peut contenir que des lettres" 
            });
        };

        if (!CITY_REGEX.test( city )){
            return res.json({ 
                'msg' : "Le champ Ville ne peut contenir que des lettres et tirets" 
            });
        };

        if (!PC_REGEX.test( postal_code )){
            return res.json({ 
                'msg' : "Merci de vérifier le code postal" 
            });
        };


        // Check if user already exists
        models.User.findOne({
            attributes : [ 'mail' ],
            where      : { mail: mail }
        })

        .then(( userFound ) => {

            if ( userFound ) {
                
                // Check the password
               // to be written!!!!!!!!!!!
                
                // Register ----
                try {

                    sequelize.transaction(async(t)=>{

                 //Create the phone
                        await models.Phone.create(
                            {number : phone },
                            {transaction : t}
                        )
                            // Associate phone and user
                            .then ( async(phoneCreated) => {
                                await userFound.addPhone(
                                phoneCreated,
                                {transaction : t}
                                )
                            })
                            .catch( (e) => console.log(e) );
                            

                        // Create the postal_code
                        const newPC = await models.Postal_code.findOrCreate({
                            where :  {number : postal_code},
                            transaction : t
                        }
                        )

                        // Create the city
                        const newCity = await models.City.findOrCreate({
                            where : {label : city},
                            transaction : t                                    
                        })
                
                        // Associate pc and city
                        await newCity[0].setPostal_code(
                            newPC[0],
                            {transaction : t}
                        )

                        // Create address
                        const newAd = await models.Adress.create({
                            title             : null,
                            number            : number,
                            street_name       : street_name,
                            additional_adress : null,
                            },
                            {transaction : t}
                        )

                        // Associate address and city             
                        await newAd.setCity(
                            newCity[0],
                            {transaction : t})
                                        
    
                        // Associate user and address                      
                        await newAd.setUser(
                            userFound,
                            {transaction : t}
                        )
                        .then(()=>{res.status(201)
                                        .json({ 'msg' : "Votre inscription a bien été prise en compte, merci de vous connecter avec vos nouveau identifiants" }) 
                        })
                    })                    
                }
                catch (error) {
                    console.log( "Rollback "+ error )
                }

            }
            else {
                return res.json({ 
                    'msg' : "Adresse mail déjà utilisée"});
            }
        })
    },
      



    logUser : (req,res) => 
    {
        // Params 
        var mail     = req.body.mail;
        var password = req.body.password;


        // Basic check
        if (mail == "" || password == "") {
            return res.json({ 'msg' : "Merci de remplir tous les champs"});
        };
        if (!EMAIL_REGEX.test( mail )){
            return res.json({ 'msg' : "Merci de re-vérifier l'adresse mail" });
        };

        // Search and authenticate
        models.User.findOne({ 
            where: { mail : mail }
        })
        .then(( user ) => {
            
            if( user ){

                // Check the password
                var bddPassword = user.password;
                var validPass   = bcrypt.compareSync( password , bddPassword );

                // If password ok, send a token
                if (validPass){

                    const token = userUtils.generateTokenForUser( user );

                    res.send({ 
                        userId : user.id,
                        userRole: user.id_role,
                        token  : token
                    });

                }
                else {
                    return res.send({ token : "err", 'msg' : "Mot de passe incorrect"});
                }
            }
            else {
                return res.json({ 'msg' : "Utilisateur non trouvé" });
            }
        })
        .catch((err) => { console.log(err) });
    },




    getUser : (req,res) =>
    {
        // Params
        var userId = req.user.userId;
        
        // Request (without password)
        models.User.scope('exceptPW').findOne({
            where : {'id' : userId},
            include : [
            { 
                model : models.Phone,
                attributes : ['id','number'] 
            },
            {
                model : models.Adress,

                include : [
                    {
                        model : models.City,
                        include : [
                            {
                                model : models.Postal_code,
                            }
                        ]
                    }
                ]
            }
        ]
        })
        .then((user) => {
            
            var result = user.dataValues
            res.status(201).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        });

    },



    
}