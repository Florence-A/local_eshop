// Imports
require('dotenv').config();

const models      = require('../models');
const bcrypt      = require ('bcrypt');
const userUtils   = require('../utils/userUtils');

// Constants
const EMAIL_REGEX    = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


// User methods
module.exports = {

    addUser : (req,res) => 
    {
        // Params
        const last_name  = req.body.last_name;
        const first_name = req.body.first_name;
        const mail       = req.body.mail;
        const password   = req.body.password;

        // Basic checks
        if ( last_name == "" || first_name == "" || mail == "" || password == "" ) {
            return res.json({ 'msg': 'Merci de remplir tous les champs du formulaire' });
        } 

        if ( !(3 < last_name.length < 22) || !(2 < first_name.length < 22) ){
            return res.json({ 'msg' : "Les noms et prénoms ne peuvent comprendre qu'entre 3 et 22 caractères" });
        }

        if (!EMAIL_REGEX.test(mail)){
            return res.json({ 'msg' : "Merci de vérifier l'adresse mail" });
        } 

        if (!PASSWORD_REGEX.test(password)){
            return res.json({ 'msg' : "Le mot de passe doit contenir au minimum 8 caractères dont au moins un chiffre, une minuscule et une majuscule."});
        }

        // User doesn't exists, register
        models.User.findOne({
            attributes : ['mail'],
            where      : {mail: mail}
        })
        // SELECT `mail` FROM `user` AS `User` WHERE `User`.`mail` = 'flo@kachu.fr' LIMIT 1

        .then((userFound) => {

            if (!userFound) {
                
                // Secure the password
                var salt           = bcrypt.genSaltSync(10);
                var hashedPassword = bcrypt.hashSync(password, salt);
                
                // Register
                var newUser = models.User.create ({
                    last_name  : last_name,
                    first_name : first_name,
                    mail       : mail,
                    password   : hashedPassword,
                    id_role    : 1
                })
                // INSERT INTO `user` (`id`,`last_name`,`first_name`,`mail`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?)

                .then( () => {
                    return res.status(200).json({ 'msg': "Inscription bien prise en compte, merci de vous connecter avec vos nouveaux identifiants."})
                })
                .catch((err) => { console.log(err) })
            }

            else {
                res.json({ 'msg' : "Cette adresse mail est déjà utilisée."});
            }
        })
        .catch((err) => { console.log(err) })
    },



    logUser : (req,res) => 
    {
        // Params 
        var mail     = req.body.mail;
        var password = req.body.password;


        // Basic check
        if (mail == "" || password == "") {
            return res.json({ 'msg' : "Merci de remplir tous les champs"})
        }
        if (!EMAIL_REGEX.test(mail)){
            return res.json({ 'msg' : "Merci de re-vérifier l'adresse mail" });
        } 

        // Search and authenticate
        models.User.findOne({ 
            where: {mail : mail}
        })
        .then((user) => {
            
            if(user){

                var bddPassword = user.password;
                var validPass   = bcrypt.compareSync(password , bddPassword);

                if (validPass){

                    const token = userUtils.generateTokenForUser(user)

                    res.send({ 
                        userId : user.id,
                        token  : token
                    })

                }
                else {
                    return res.send({ token : "err"});
                }
            }
            else {
                return res.json({ 'msg' : "Utilisateur non trouvé" });
            }
        })
        .catch((err) => { console.log(err) })
    },



    deleteUser : (res,req) => 
    {

    },
    updateUser : (req,res) => 
    {

    },
    
}