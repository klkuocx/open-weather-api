'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.myAssociation = this.belongsTo(models.Station)
    }
  }
  Weather.init({
    StationId: DataTypes.STRING,
    obsTime: DataTypes.STRING,
    ELEV: DataTypes.STRING,
    WDIR: DataTypes.STRING,
    WDSD: DataTypes.STRING,
    TEMP: DataTypes.STRING,
    HUMD: DataTypes.STRING,
    PRES: DataTypes.STRING,
    H_24R: DataTypes.STRING,
    H_FX: DataTypes.STRING,
    H_XD: DataTypes.STRING,
    H_FXT: DataTypes.STRING,
    D_TX: DataTypes.STRING,
    D_TXT: DataTypes.STRING,
    D_TN: DataTypes.STRING,
    D_TNT: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Weather',
  })
  return Weather
}