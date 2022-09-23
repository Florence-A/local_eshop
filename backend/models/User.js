
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
    static associate({Role, Phone, Adress}) {
      this.belongsTo ( Role, { foreignKey: 'id_role' }),
      this.hasMany ( Phone, {foreignKey: 'id_user' } ),
      this.hasMany ( Adress , { foreignKey: 'id_user' } )
    }
  }
  User.init({
    last_name : DataTypes.STRING,
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
    //options
    sequelize,
    modelName: 'User',
    tableName: 'user',
    scopes: {
      exceptPW: {
        attributes: { exclude: ['password'] }
      }
    }
  });
  return User;

}