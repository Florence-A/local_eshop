'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature_value extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Feature, Product }) {
      // define association here
      this.belongsTo(Feature, {
        foreignKey: 'feature_id'
      }),

      this.belongsToMany(Product, {
        through: 'ProductFeature',
        foreignKey: 'feature_value_id'
      })
    }
  }
  Feature_value.init({
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    } 
  }, {
    sequelize,
    modelName: 'Feature_value',
    tableName: 'feature_value'
  });
  return Feature_value;
};