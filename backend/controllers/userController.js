// Imports
require('dotenv').config()
const jwt     = require('jsonwebtoken')
const models  = require('../models')


// Functions
function generateAccessToken(user) {

    console.log(user)
    return jwt.sign({nom:user.lastname, prenom:user.firstname}, process.env.TOKEN_SECRET, { expiresIn: '30m' });
}


function authenticateToken(req, res, next) {
    
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1]
    console.log("TOKEN",token);
    if (token == null) { 
        return res.sendStatus(401) 
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next() 
    })
}


// Modules
exports.addUser = (req,res) => {

}

exports.findUser = (res,req) => {

}

exports.deleteUser = (res,req) => {

}

exports.updateUser = (req,res) => {

}

exports.logUser = (req,res) => {
    
}