'use strict'

const express = require('express')
const ControllerUser = require('../controllers/controllerUser')
const router = express.Router()

router.post('/login', ControllerUser.loginUser)

module.exports = router
