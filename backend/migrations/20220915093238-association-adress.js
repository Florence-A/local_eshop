
'use strict';

module.exports = {

  
  async up (queryInterface, Sequelize) {

    // Adress-User
    return queryInterface.addColumn(
      'Adress',       
      'id_user',     
      {            
        type: Sequelize.INTEGER,
        references: {
          model   : 'User',          
          key     : 'id',             
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Adress',
      'id_user',
    )
  },

};

