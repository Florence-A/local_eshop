const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

require('dotenv').config()
require('../controllers/userController.js')



module.exports = router