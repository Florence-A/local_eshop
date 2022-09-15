'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('product', 'tva_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tva',
          key: 'id'
        }
      });

    await queryInterface.addColumn('image', 'product_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'product',
          key: 'id'
        }
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('product','tva_id');
    await queryInterface.removeColumn('product','overdue_date_id');
    await queryInterface.removeColumn('image','product_id');
  }
}
