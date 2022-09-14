'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Category }) {
      // define association here
      this.belongsToMany(Product, {
        through: 'ProductCategory',
        foreignKey: 'category_id'
      }),

      this.hasMany(Category, {
        foreignKey: 'category_id'
      }),
      this.belongsTo(Category, {
        foreignKey: 'category_id'
      })
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'category'
  });
  return Category;
};