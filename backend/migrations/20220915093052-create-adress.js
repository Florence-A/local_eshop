'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adress', {
      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      title: {
        type  : Sequelize.STRING
      },
      number: {
        type  : Sequelize.STRING
      },
      street_name: {
        type  : Sequelize.STRING
      },
      additional_adress: {
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
    await queryInterface.dropTable('Adress');
  }
};