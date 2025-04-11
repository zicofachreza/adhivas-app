'use strict'

const express = require('express')
const ControllerUser = require('../controllers/controllerUser')
const authenticate = require('../middlewares/authentication')
const authorizeAdminOnly = require('../middlewares/authorization')
const router = express.Router()

router.post('/login', ControllerUser.loginUser)

router.use(authenticate)
router.post('/add-user', authorizeAdminOnly, ControllerUser.addUser)

module.exports = router
