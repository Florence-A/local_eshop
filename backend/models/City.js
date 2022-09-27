'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo ( models.Postal_code , { foreignKey: 'id_pc'} ),
      this.hasMany ( models.Adress , { foreignKey: 'id_city' } )
    }
  }
  City.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'city'
  });
  return City;
};