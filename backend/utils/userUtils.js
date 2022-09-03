// Imports
const jwt = require('jsonwebtoken');


// Functions for User

module.exports = {


    generateTokenForUser : (user) => {

        return jwt.sign({
            first_name : user.first_name, 
            userId     : user.id,
            role       : user.id_role
        }, 
        process.env.TOKEN_SECRET, { 
            expiresIn: '30m' 
        });
    },


    authenticateToken : (req, res, next) => {
        
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
}
