'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('feature_value', 'feature_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'feature',
        key: 'id'
      }
    })

     await queryInterface.addColumn('productfeature', 'feature_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'feature',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn('feature_value', 'feature_id')
  }
};
