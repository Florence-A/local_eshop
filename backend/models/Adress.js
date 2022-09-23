'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo ( models.City , { foreignKey: 'id_city' } ),
      this.belongsTo ( models.User , { foreignKey: 'id_user' } )
    }
  }
  Adress.init({
    title: DataTypes.STRING,
    number: DataTypes.STRING,
    street_name: DataTypes.STRING,
    additional_adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};