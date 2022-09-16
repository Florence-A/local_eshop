
'use strict';

module.exports = {

  // City - Postal_code association 
  async up (queryInterface, Sequelize) {

    return queryInterface.addColumn(
      'City',      
      'id_pc',  
      {            
        type: Sequelize.INTEGER,  
        references: {
          model   : 'Postal_code',          
          key     : 'id',              
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'City',
      'id_pc',
    )
  },

};

