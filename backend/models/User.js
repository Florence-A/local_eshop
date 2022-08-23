'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, {as:'id_role'});
    }
  }
  User.init({
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    mail: {
      type : DataTypes.STRING,
      allowNull: false
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: '_user',
  });
  return User;
};