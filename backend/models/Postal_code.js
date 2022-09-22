'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postal_code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany ( models.City , { foreignKey: 'id_pc'} )
    }
  }
  Postal_code.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Postal_code',
  });
  return Postal_code;
};