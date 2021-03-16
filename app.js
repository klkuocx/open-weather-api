// Include packages and project related variables
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

// set routes
routes(app)

// listen to server
app.listen(port, () => {
  console.log(`Express is listening on ${port}`)
})