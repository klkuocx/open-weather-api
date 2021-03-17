'use strict'
const getOpenCWBdata = require('../utils/apiHelpers')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await getOpenCWBdata()
    const stations = data.map(l => ({
      lat: l.lat,
      lon: l.lon,
      locationName: l.locationName,
      stationId: l.stationId,
      CITY: l.parameter[0].parameterValue,
      CITY_SN: l.parameter[1].parameterValue,
      TOWN: l.parameter[2].parameterValue,
      TOWN_SN: l.parameter[3].parameterValue,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return queryInterface.bulkInsert('Stations', stations, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {})
  }
}
