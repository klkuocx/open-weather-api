require('dotenv').config()
const axios = require('axios')
const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001'
const CWB_AUTH_ID = process.env.CWB_AUTH_ID

const { Weather } = require('../models')

async function getWeatherPerHour() {
  try {
    const response = await axios.get(`${baseURL}?Authorization=${CWB_AUTH_ID}`)
    const locations = response.data.records.location
    const weathers = locations.map(l => {
      const weatherObj = {
        StationId: l.stationId,
        obsTime: l.time.obsTime,
      }

      // get all weather data 
      l.weatherElement.forEach(e => {
        weatherObj[e.elementName] = e.elementValue
      })

      return weatherObj
    })

    // save data in DB
    await Weather.bulkCreate(weathers)
    console.log('Open weather data were updated successfully')
  } catch (err) { console.error(err) }
}

module.exports = getWeatherPerHour
