const Sequelize = require('sequelize');
const sequelize = require('../db/connection.js')

const Role = sequelize.define('Role', {
    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    },
    {tableName: 'role'}
);

module.exports = Role;
