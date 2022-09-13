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
    static associate({ Tva, Category, Feature_value, Image, Overdue_date }) {
      // define association here
      // a product has one tva
      this.belongsTo(Tva, {
        foreignKey: 'tva_id'
      }),

      // a product has one or many categories
      this.belongsToMany(Category, {
        through     : 'ProductCategory',
        foreignKey  : 'product_id'
      }),

      // a product has one or many features
      this.belongsToMany(Feature_value, {
        through     : 'ProductFeature',
        foreignKey  : 'product_id'
      }),

      // a product has one or many images
      this.hasMany(Image, {
        foreignKey: 'product_id'
      }),

      // a product has one overdue_date
      this.belongsTo(Overdue_date, {
        foreignKey: 'overdue_date_id'
      })
      
    }
  }
  Product.init({
    name: {
      type      : DataTypes.STRING,
      allowNull : false,
    },
    _ref: {
      type      : DataTypes.STRING,
      allowNull : false,
      unique    : true
    },
    description: {
      type      : DataTypes.STRING,
      allowNull : false
    },
    HT_price: {
      type      : DataTypes.STRING,
      allowNull : false
    },
    lead_time: {
      type      : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};