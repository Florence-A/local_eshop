'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Feature_value }) {
      // define association here
      this.hasMany(Feature_value, {
        foreignKey: 'feature_id'
      })
    }
  }
  Feature.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: true
    }
  }, {
    sequelize,
    modelName: 'Feature',
    tableName: 'feature'
  });
  return Feature;
};