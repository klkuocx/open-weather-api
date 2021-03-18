const { Op } = require('sequelize')
const { Weather, Station } = require('../models')

module.exports = {
  getWeathers: async (req, res, next) => {
    try {
      const CITY = req.query.CITY ? req.query.CITY.split(',') : ['臺北市', '新北市', '桃園市']
      const weathers = await Weather.findAll({
        include: [{
          model: Station,
          attributes: [],
          where: { CITY: { [Op.or]: CITY } }
        }]
      })

      res.json(weathers)
    } catch (err) { next(err) }
  }
}