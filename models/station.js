'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.myAssociation = this.hasMany(models.Weather)
    }
  }
  Station.init({
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    locationName: DataTypes.STRING,
    stationId: DataTypes.STRING,
    CITY: DataTypes.STRING,
    CITY_SN: DataTypes.STRING,
    TOWN: DataTypes.STRING,
    TOWN_SN: DataTypes.STRING
  }, {
    indexes: [{
      unique: true,
      fields: ['stationId']
    }],
    sequelize,
    modelName: 'Station',
  })
  return Station
}