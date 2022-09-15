// Imports
const jwt = require('jsonwebtoken');


// Functions for User

module.exports = {


    generateTokenForUser : (user) => {

        return jwt.sign({ 
            userId     : user.id,
            role       : user.id_role
        }, 
        process.env.TOKEN_SECRET, { 
            expiresIn: '2h' 
        });
    },


    authenticateToken : (req, res, next) => {
        
        const token = req.headers.authorization;
        
        if (!token) { 
            return res.sendStatus(401) ;
        }

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
        
    },

}
