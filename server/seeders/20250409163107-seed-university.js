'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const dataUniversity = require('../data/universities.json').map(
            (el) => {
                delete el.id
                el.createdAt = new Date()
                el.updatedAt = new Date()

                return el
            }
        )
        await queryInterface.bulkInsert('Universities', dataUniversity, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Universities', null, {})
    },
}
