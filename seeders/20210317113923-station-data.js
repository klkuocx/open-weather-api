'use strict'
require('dotenv').config()
const axios = require('axios')
const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001'
const CWB_AUTH_ID = process.env.CWB_AUTH_ID

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const response = await axios.get(`${baseURL}?Authorization=${CWB_AUTH_ID}`)
    const locations = response.data.records.location
    const stations = locations.map(l => ({
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
