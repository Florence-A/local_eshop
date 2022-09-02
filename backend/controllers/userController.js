// Imports
require('dotenv').config();
const jwt     = require('jsonwebtoken');
const models  = require('../models');
const bcrypt = require ('bcrypt');
const { resolve } = require('path');

// Constants
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const NAMES_REGEX = /^[a-zA-Z]{3,22}$/;

// Functions
// function generateAccessToken(user) {

//     console.log(user)
//     return jwt.sign({nom:user.lastname, prenom:user.firstname}, process.env.TOKEN_SECRET, { expiresIn: '30m' });
// }


// function authenticateToken(req, res, next) {
    
//     console.log(req.headers);
//     const token = req.headers.authorization.split(" ")[1]
//     console.log("TOKEN",token);
//     if (token == null) { 
//         return res.sendStatus(401) 
//     }
//     jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next() 
//     })
// }


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

        if ( last_name.length < 3 || first_name.length < 3 ){
            return res.json({ 'msg' : 'Les noms et prénoms doivent contenir au moins 3 caractères' });
        }

        if ( !NAMES_REGEX.test(first_name) || !NAMES_REGEX.test(last_name) ) {
            return res.json({ 'msg' : "Les nom et prénom ne peuvent contenir que des lettres" });
        }

        if (!EMAIL_REGEX.test(mail)){
            return res.json({ 'msg' : "Merci de vérifier l'adresse mail" });
        } 

        if (!PASSWORD_REGEX.test(password)){
            return res.json({ 'msg' : "Le mot de passe doit contenir au minimum 8 caractères dont au moins un chiffre, une minuscule et une majuscule."});
        }

        // User doesn't exists, register
        models.User.findOne({
            attributes: ['mail'],
            where: {mail: mail}
        })
        // SELECT `mail` FROM `user` AS `User` WHERE `User`.`mail` = 'flo@kachu.fr' LIMIT 1

        .then((userFound) => {

            if (!userFound) {
                console
                // Secure the password
                var salt = bcrypt.genSaltSync(10);
                var hashedPassword = bcrypt.hashSync(password, salt);
                console.log('hashedPassword', hashedPassword)
                // Register
                var newUser = models.User.create ({
                    last_name: last_name,
                    first_name: first_name,
                    mail: mail,
                    password: hashedPassword,
                    id_role: 1
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
        .catch((err) => {console.log(err)} )






    },
    findUser : (res,req) => 
    {

    },
    deleteUser : (res,req) => 
    {

    },
    updateUser : (req,res) => 
    {

    },
    logUser : (req,res) => 
    {
    
    }
}