// Imports
const jwt = require('jsonwebtoken');


// Functions for User

module.exports = {

    // Token
    generateTokenForUser : (user) => {

        return jwt.sign({ 
            userId     : user.id,
            role       : user.id_role
        }, 
        process.env.TOKEN_SECRET, { 
            expiresIn: '2h' 
        });
    },


    // REVOIR RES.REDIRECT
    authenticateToken : (req, res, next) => {
        
        const token = req.headers.authorization;
        
        if (!token) { 
            return res.redirect('/shop/SignIn');
        }

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.redirect('/shop/SignIn');
            }
            req.user = user;
            next();
        });
        
    },


}
