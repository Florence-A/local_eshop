// Imports
const express = require('express')
const userCtrl = require('../controllers/userController.js')
const { authenticateToken } = require('../utils/userUtils.js')



// Constants
const router = express.Router()


// Routes
router.post('/signup', userCtrl.addUser)
router.post('/signin', userCtrl.logUser)
router.get('/userinfo', authenticateToken, userCtrl.getUser)



module.exports = router

