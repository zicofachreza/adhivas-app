'use strict'

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User } = require('../models')

class ControllerUser {
    static async loginUser(req, res, next) {
        try {
            const { username, password } = req.body
            if (!username) throw { name: 'InvalidUsername' }
            if (!password) throw { name: 'InvalidPassword' }

            const dataUser = await User.findOne({ where: { username } })
            if (!dataUser) throw { name: 'InvalidUser' }

            const comparedPassword = comparePassword(
                password,
                dataUser.password
            )
            if (!comparedPassword) throw { name: 'InvalidUser' }

            const getToken = signToken({
                id: dataUser.id,
                username: dataUser.username,
            })
            res.status(200).json({ accessToken: getToken })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerUser
