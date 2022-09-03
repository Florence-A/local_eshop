// Imports
const express = require('express')
const userCtrl = require('../controllers/userController.js')



// Constants
const router = express.Router()


// Routes
// TODO signup, create, read, signin, update, delete

router.post('/signup', userCtrl.addUser)
router.post('/signin', userCtrl.logUser)


module.exports = router