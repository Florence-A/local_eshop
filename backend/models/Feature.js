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
      this.belongsToMany(Product, {
        through: 'ProductFeature',
        foreignKey: 'feature_id'
      }),

      this.hasMany(Feature_value)
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