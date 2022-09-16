
'use strict';

module.exports = {

  // Phone-User association 
  async up (queryInterface, Sequelize) {

    return queryInterface.addColumn(
      'Phone',      
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
      'Phone',
      'id_user',
    )
  },
};

