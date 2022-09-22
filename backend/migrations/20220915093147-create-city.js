'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('City', {
      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      label: {
        type  : Sequelize.STRING
      },
      createdAt: {
        allowNull : false,
        type      : Sequelize.DATE
      },
      updatedAt: {
        allowNull : false,
        type      : Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('City');
  }
};