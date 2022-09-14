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
    
   
   
    const tva = await models.Tva.findOrCreate({
      where: { rate: p1.tva_rate }
    })  
    
    const o_d = await models.Overdue_date.findOrCreate({
      where: { time: p1.overdue_date }
    })

    const catP = await models.Category.findOrCreate({
      where: { name: p1.categories[0].catParent }
    })

    const catC = await models.Category.findOrCreate({
      where: { name: p1.categories[1].catChild },
      defaults: {
        category_id: catP[0].dataValues.id
      }
    })

    
    const feat0 = await models.Feature.findOrCreate({
      where: { name: p1.features[0].feature }
    })
    const featVal0 = await models.Feature_value.findOrCreate({
      where: { value: p1.features[0].feature_value },
      defaults: {
        feature_id: feat0[0].dataValues.id
      }
    })
    const feat1 = await models.Feature.findOrCreate({
      where: { name: p1.features[1].feature }
    })
    const featVal1 = await models.Feature_value.findOrCreate({
      where: { value: p1.features[1].feature_value },
      defaults: {
        feature_id: feat1[0].dataValues.id
      }
    })

    await models.Product.create(
      {
        name: p1.name,
        _ref: p1.ref,
        description: p1.description,
        HT_price: p1.HT_price,
        lead_time: p1.lead_time,
        tva_id: tva[0].dataValues.id,
        overdue_date_id: o_d[0].dataValues.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ).then(async productCreated =>  {
      // console.log(productCreated)
      await productCreated.addCategories([catP[0], catC[0]]);
      await productCreated.addFeature_values([featVal0[0], featVal1[0]]);
    })
    
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
