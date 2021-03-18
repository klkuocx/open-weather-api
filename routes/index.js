const weathers = require('./weathers')

module.exports = (app) => {
  app.use('/api/weathers', weathers)
}