'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StationId: {
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'Stations',
          key: 'stationId'
        }
      },
      obsTime: {
        type: Sequelize.STRING
      },
      ELEV: {
        type: Sequelize.STRING
      },
      WDIR: {
        type: Sequelize.STRING
      },
      WDSD: {
        type: Sequelize.STRING
      },
      TEMP: {
        type: Sequelize.STRING
      },
      HUMD: {
        type: Sequelize.STRING
      },
      PRES: {
        type: Sequelize.STRING
      },
      H_24R: {
        type: Sequelize.STRING
      },
      H_FX: {
        type: Sequelize.STRING
      },
      H_XD: {
        type: Sequelize.STRING
      },
      H_FXT: {
        type: Sequelize.STRING
      },
      D_TX: {
        type: Sequelize.STRING
      },
      D_TXT: {
        type: Sequelize.STRING
      },
      D_TN: {
        type: Sequelize.STRING
      },
      D_TNT: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Weather');
  }
};