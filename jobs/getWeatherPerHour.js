const getOpenCWBdata = require('../utils/apiHelpers')
const { Weather } = require('../models')

async function getWeatherPerHour() {
  try {
    const data = await getOpenCWBdata()
    const weathers = data.map(l => {
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
