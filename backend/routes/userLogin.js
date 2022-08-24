const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

require('dotenv').config()


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


module.exports = router