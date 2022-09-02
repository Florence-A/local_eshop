// Imports
require('dotenv').config()
const jwt     = require('jsonwebtoken')
const models  = require('../models')

// Constants
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const NAMES_REGEX = /^[a-zA-Z]{3,22}$/

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
            return res.json({ 'msg': 'Merci de remplir tous les champs du formulaire' })
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
            return res.json({ 'msg' : "Le mot de passe doit contenir au minimum 8 caractères dont au moins un chiffre, une minuscule et une majuscule."})
        }else { return res.json({'msg': 'Ok, la suite !'})};






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