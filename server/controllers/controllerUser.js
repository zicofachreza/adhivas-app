'use strict'

const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User, University, Sequelize } = require('../models')

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

    static async addUser(req, res, next) {
        try {
            await User.create(req.body)
            res.status(201).json({ message: 'User created successfully' })
        } catch (error) {
            next(error)
        }
    }

    static async showAllUsers(req, res, next) {
        try {
            const dataUsers = await User.findAll({
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
                include: [{ model: University, attributes: ['univName'] }],
                order: [[Sequelize.col('nim'), 'ASC']],
            })

            res.status(200).json(dataUsers)
        } catch (error) {
            next(error)
        }
    }

    static async updateUserByPk(req, res, next) {
        try {
            const dataUser = await User.findByPk(req.params.userId)
            if (!dataUser) throw { name: 'NotFound' }

            await dataUser.update(req.body)
            res.status(200).json({
                message: `Success update ${dataUser.username} data`,
                dataUser,
            })
        } catch (error) {
            next(error)
        }
    }

    static async removeUserByPk(req, res, next) {
        try {
            const dataUser = await User.findByPk(req.params.userId)
            if (!dataUser) throw { name: 'NotFound' }

            await dataUser.destroy()
            res.status(200).json({
                message: `Success delete ${dataUser.username}`,
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerUser
