'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Overdue_date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Overdue_date.init({
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Overdue_date',
  });
  return Overdue_date;
};