'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            nim: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            fullName: {
                type: Sequelize.STRING,
            },
            birthDate: {
                type: Sequelize.STRING,
            },
            role: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            UniversityId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Universities',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users')
    },
}
