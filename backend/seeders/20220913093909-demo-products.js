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
      img_path        : "../../public/image-alt.svg",
      tva_rate        : 20,
      overdue_date    : new Date(),
      categories      : [{ catParent: 'homme' }, { catChild: 'pantalon' }],
      features        : [{ feature: 'couleur', feature_value:'bleu' }, { feature: 'taille', feature_value:'xs' }]
    };

    const p2 = 
      {
      name            : "pantalon homme",
      _ref            : "phrxl02",
      description     : "un pantalon rouge taille xl",
      HT_price        : 50,
      lead_time       : 1,
      img_path        : "../../public/image-alt.svg",
      tva_rate        : 20,
      overdue_date    : new Date(),
      categories      : [{ catParent: 'homme' }, { catChild: 'pantalon' }],
      features        : [{ feature: 'couleur', feature_value:'rouge' }, { feature: 'taille', feature_value:'xl' }]
    };

    const p3 = 
      {
      name            : "veste femme",
      _ref            : "vfbxs03",
      description     : "une veste bleue taille xs",
      HT_price        : 50,
      lead_time       : 1,
      img_path        : "../../public/image-alt.svg",
      tva_rate        : 20,
      overdue_date    : new Date(),
      categories      : [{ catParent: 'femme' }, { catChild: 'veste' }],
      features        : [{ feature: 'couleur', feature_value:'bleu' }, { feature: 'taille', feature_value:'xs' }]
    };

    const p4 = 
      {
      name            : "chaussure enfant",
      _ref            : "phbxs04",
      description     : "chaussures bleues taille xs",
      HT_price        : 50,
      lead_time       : 1,
      img_path        : "../../public/image-alt.svg",
      tva_rate        : 20,
      overdue_date    : new Date(),
      categories      : [{ catParent: 'enfant' }, { catChild: 'chaussure' }],
      features        : [{ feature: 'couleur', feature_value:'bleu' }, { feature: 'taille', feature_value:'xs' }]
    };
    
   
    async function createProduct(product) {

      const tva = await models.Tva.findOrCreate({
        where: { rate: product.tva_rate }
      });
        
      const o_d = await models.Overdue_date.findOrCreate({
        where: { time: product.overdue_date }
      });

      const catP = await models.Category.findOrCreate({
        where: { name: product.categories[0].catParent }
      });
      const catC = await models.Category.findOrCreate({
        where: { name: product.categories[1].catChild },
        defaults: {
          category_id: catP[0].dataValues.id
        }
      });

      
      const feat0 = await models.Feature.findOrCreate({
        where: { name: product.features[0].feature }
      });
      const featVal0 = await models.Feature_value.findOrCreate({
        where: { value: product.features[0].feature_value },
        defaults: {
          feature_id: feat0[0].dataValues.id
        }
      });
      const feat1 = await models.Feature.findOrCreate({
        where: { name: product.features[1].feature }
      });
      const featVal1 = await models.Feature_value.findOrCreate({
        where: { value: product.features[1].feature_value },
        defaults: {
          feature_id: feat1[0].dataValues.id
        }
      });

      const img = await models.Feature.findOrCreate({
        where: { path: product.img_path }
      });

      const prod = await models.Product.create(
        {
          name: product.name,
          _ref: product._ref,
          description: product.description,
          HT_price: product.HT_price,
          lead_time: product.lead_time,
          tva_id: tva[0].dataValues.id,
          overdue_date_id: o_d[0].dataValues.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ).then(async productCreated =>  {
        // console.log(productCreated)
        await productCreated.addCategories([catP[0], catC[0]]);
        await productCreated.addFeature_values([featVal0[0], featVal1[0]]);
        await productCreated.addImage(img[0])
      });

      // console.log(prod);
  }
 
  await createProduct(p1);
  await createProduct(p2);
  await createProduct(p3);
  await createProduct(p4);
      
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
