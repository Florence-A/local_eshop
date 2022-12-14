'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Postal_code', {
      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      number: {
        type  : Sequelize.INTEGER
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
    await queryInterface.dropTable('Postal_code');
  }
};