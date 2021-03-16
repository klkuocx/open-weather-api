'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.STRING
      },
      lon: {
        type: Sequelize.STRING
      },
      locationName: {
        type: Sequelize.STRING
      },
      stationId: {
        type: Sequelize.STRING
      },
      CITY: {
        type: Sequelize.STRING
      },
      CITY_SN: {
        type: Sequelize.STRING
      },
      TOWN: {
        type: Sequelize.STRING
      },
      TOWN_SN: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addIndex('Stations', ['stationId'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stations')
  }
}