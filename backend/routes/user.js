// Imports
const express = require('express')
const userCtrl = require('../controllers/userController.js')



// Constants
const router = express.Router()


// Routes
// TODO signup, create, read, signin, update, delete

router.post('/addUser', userCtrl.addUser)



module.exports = router