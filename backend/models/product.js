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
    static associate({ Tva, Category }) {
      // define association here
      this.belongsTo(Tva, {
        foreignKey: 'tva_id'
      }),
      this.belongsToMany(Category, {
        through: 'ProductCategory',
        foreignKey: 'product_id'
      })
    }
  }
  Product.init({
    _ref: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    HT_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lead_time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};