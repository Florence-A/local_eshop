const Sequelize = require('sequelize');
const sequelize = require('../db/connection.js')

const User = sequelize.define('User', {
    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {tableName: '_user'}
);

module.exports = User;
