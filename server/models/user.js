'use strict'
const { Model } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.University, { foreignKey: 'UniversityId' })
        }
    }
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: 'Username is already used',
                },
                validate: {
                    notNull: { msg: 'Username is required' },
                    notEmpty: { msg: 'Username is required' },
                    len: {
                        args: [5],
                        msg: 'Username must be at least 5 characters long',
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: 'Password is required' },
                    notEmpty: { msg: 'Password is required' },
                    len: {
                        args: [5],
                        msg: 'Password must be at least 5 characters long',
                    },
                },
            },
            nim: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: 'NIM is required' },
                    notEmpty: { msg: 'NIM is required' },
                    len: {
                        args: [5],
                        msg: 'NIM must be at least 5 characters long',
                    },
                },
            },
            fullName: DataTypes.STRING,
            birthDate: DataTypes.STRING,
            role: {
                type: DataTypes.STRING,
                defaultValue: 'Student',
            },
            UniversityId: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            modelName: 'User',
            hooks: {
                beforeCreate(newUser) {
                    newUser.password = hashPassword(newUser.password)
                },
            },
        }
    )
    return User
}
