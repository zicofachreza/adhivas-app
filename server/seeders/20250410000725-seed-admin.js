'use strict'

const { hashPassword } = require('../helpers/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const dataAdmin = require('../data/admins.json').map((el) => {
            delete el.id
            el.password = hashPassword(el.password)
            el.createdAt = new Date()
            el.updatedAt = new Date()

            return el
        })
        await queryInterface.bulkInsert('Users', dataAdmin, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {})
    },
}
