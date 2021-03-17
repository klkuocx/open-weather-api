// Include packages and project related variables
const express = require('express')
const cron = require('node-cron')
const app = express()
const port = 3000
const routes = require('./routes')
const getWeatherPerHour = require('./jobs/getWeatherPerHour.js')

// set routes
routes(app)

// Schedule job to be run on the server.
cron.schedule('0 0 */1 * * *', async () => await getWeatherPerHour)

// listen to server
app.listen(port, () => {
  console.log(`Express is listening on ${port}`)
})