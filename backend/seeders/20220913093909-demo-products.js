'use strict';
const models = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const p1 = 
      {
      name            : "pantalon homme",
      _ref            : "phbxs01",
      description     : "un pantalon bleu taille xs",
      HT_price        : 50,
      lead_time       : 1,
      tva_rate        : 20,
      overdue_date    : new Date(),
      categories      : [{ catParent: 'homme' }, { catChild: 'pantalon' }],
      features        : [{ feature: 'couleur', feature_value:'bleu' }, { feature: 'taille', feature_value:'xs' }]
    }
    

    function create(product){
      models.Tva.findOrCreate({
          where: { rate: product.tva_rate }
        }).then(res =>{console.log(res)})
          .catch(err => {console.log(err)})

        
    
    }

    create(p1)
    
  },

  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
  }
};
