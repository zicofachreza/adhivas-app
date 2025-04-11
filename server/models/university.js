'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class University extends Model {
        static associate(models) {
            University.hasMany(models.User, { foreignKey: 'UniversityId' })
        }
    }
    University.init(
        {
            univName: DataTypes.STRING,
            location: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'University',
        }
    )
    return University
}
