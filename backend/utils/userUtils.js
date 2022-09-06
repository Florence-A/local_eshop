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
        
        console.log(req.headers)
        const authHeader = req.headers.authorization;
        console.log(authHeader); // UNDEFINED
        const token = authHeader.split(" ")[1];
        // console.log(token);
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
