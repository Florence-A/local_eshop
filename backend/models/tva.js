'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.hasMany(Product, {
        foreignKey: 'tva_id'
      })
    }
  }
  Tva.init({
    rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tva',
    tableName: 'tva'
  });
  return Tva;
};