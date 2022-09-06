// Imports
const express = require('express')
const userCtrl = require('../controllers/userController.js')
const { authenticateToken } = require('../utils/userUtils.js')



// Constants
const router = express.Router()


// Routes
// TODO signup, create, read, signin, update, delete

router.post('/signup', userCtrl.addUser)
router.post('/signin', userCtrl.logUser)

router.post('/userinfo', authenticateToken, (req, res) => {
    console.log("Je suis arrivé jusque là, tout va bien :)")
})



module.exports = router