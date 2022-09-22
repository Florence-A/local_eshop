
'use strict';

module.exports = {

  
  async up (queryInterface, Sequelize) {

    // Adress-City
    return queryInterface.addColumn(
      'Adress',      
      'id_city',     
      {            
        type: Sequelize.INTEGER,  
        references: {
          model   : 'City',         
          key     : 'id',             
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Adress',
      'id_city',
    )
  },

};

