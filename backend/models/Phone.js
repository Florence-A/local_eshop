'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo ( models.User , { foreignKey : 'id_user' } )
    }
  }
  Phone.init({
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Phone',
    tablename: 'phone',
  });
  return Phone;
};