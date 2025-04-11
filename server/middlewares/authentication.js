'use strict'

const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authenticate = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization
        if (!accessToken) throw { name: 'InvalidToken' }

        const [type, token] = accessToken.split(' ')
        const payload = verifyToken(token)
        const dataUser = await User.findByPk(payload.id)
        if (type !== 'Bearer' || !dataUser) throw { name: 'InvalidToken' }

        req.dataUser = dataUser
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authenticate
