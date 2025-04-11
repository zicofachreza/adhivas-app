'use strict'

const express = require('express')
const ControllerUser = require('../controllers/controllerUser')
const authenticate = require('../middlewares/authentication')
const authorizeAdminOnly = require('../middlewares/authorization')
const router = express.Router()

router.post('/login', ControllerUser.loginUser)

router.use(authenticate)
router.post('/add-user', authorizeAdminOnly, ControllerUser.addUser)
router.get('/', ControllerUser.showAllUsers)
router.put('/:userId', authorizeAdminOnly, ControllerUser.updateUserByPk)
router.delete('/:userId', authorizeAdminOnly, ControllerUser.removeUserByPk)
router.get('/name/:name', ControllerUser.getDataByName)
router.get('/nim/:nim', ControllerUser.getDataByNIM)

module.exports = router
