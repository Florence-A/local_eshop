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
        references: {
          model: 'Tva',
          key: 'id'
        }
      }
    )
    // await queryInterface.createTable('productcategory', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   product_id: {
    //     type: Sequelize.INTEGER
    //   },
    //   category_id: {
    //     type: Sequelize.INTEGER,
        
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('product','tva_id')
    // await queryInterface.dropTable('productcategory');
  }
};
