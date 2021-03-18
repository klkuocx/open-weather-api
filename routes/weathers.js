const express = require('express')
const router = express.Router()
const weathersController = require('../controllers/weathersController')

router.get('/', weathersController.getWeathers)

module.exports = router
