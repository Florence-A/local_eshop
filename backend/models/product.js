'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tva }) {
      // define association here
      this.belongsTo(Tva, {
        foreignKey: 'tva_id'
      })
    }
  }
  Product.init({
    _ref: DataTypes.STRING,
    description: DataTypes.STRING,
    HT_price: DataTypes.INTEGER,
    lead_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};