'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    // Ajout de la relation User-Role

    return queryInterface.addColumn(
      'User',      // modèle contenant la FK
      'id_role',   // nom de la FK
      {            
        type: Sequelize.INTEGER,  // Options de la FK
        references: {
          model: 'Role',          // modèle visé par la FK
          key: 'id',              // nom de la colonne visée
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',     // si 
      }
    )

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'User',
      'id_role',
    )
  }

};
