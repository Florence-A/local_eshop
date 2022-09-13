'use strict';

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
// insert 2 tva rates
    await queryInterface.bulkInsert('tva', [
      {
        rate: 20,
        createdAt: new Date(),
        updatedAt:new Date()
      },{
        rate: 5,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ]);

//insert one overdue_time
    await queryInterface.bulkInsert('overdue_date', [{
        time: new Date(),
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ]);

//insert 3 parent-categories and 3 child-categories
    await queryInterface.bulkInsert('category', [
      {
        name: 'homme',
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'femme',
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'enfant',
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'pantalon',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 1
      },
      {
        name: 'veste',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 1
      },
      {
        name: 'chaussure',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 1
      },
      {
        name: 'pantalon',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 2
      },
      {
        name: 'veste',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 2
      },
      {
        name: 'chaussure',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 2
      },
      {
        name: 'pantalon',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 3
      },
      {
        name: 'veste',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 3
      },
      {
        name: 'chaussure',
        createdAt: new Date(),
        updatedAt:new Date(),
        category_id: 3
      },
    ]),

// insert festures and features values
    await queryInterface.bulkInsert('feature', [
      {
        name: 'couleur',
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'taille',
        createdAt: new Date(),
        updatedAt:new Date()
      },
    ]),
    await queryInterface.bulkInsert('feature_value', [
      {
        value: 'bleu',
        createdAt: new Date(),
        updatedAt:new Date(),
        feature_id: 1

      },
      {
        value: 'rouge',
        createdAt: new Date(),
        updatedAt:new Date(),
        feature_id: 1

      },
      {
        value: 'xs',
        createdAt: new Date(),
        updatedAt:new Date(),
        feature_id: 2

      },
      {
        value: 'xl',
        createdAt: new Date(),
        updatedAt:new Date(),
        feature_id: 2

      },
    ]),

// insert a default picture
    await queryInterface.bulkInsert('image', [
      {
        path: '../public/bx-image-alt.svg',
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ])
// insert a few products
    await queryInterface.bulkInsert('product', [
      {
        name: 'pantalon homme',
        _ref: 'phbxs01',
        description: 'un pantalon très confortable, bleu, taille xs',
        HT_price: 25,
        lead_time: 1,
        tva_id: 1,
        overdue_date_id: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'pantalon homme',
        _ref: 'phbxl02',
        description: 'un pantalon très confortable, bleu, taille xl',
        HT_price: 25,
        lead_time: 1,
        tva_id: 1,
        overdue_date_id: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'veste femme',
        _ref: 'vfrxs03',
        description: 'une veste élégante, rouge, taille xs',
        HT_price: 25,
        lead_time: 1,
        tva_id: 1,
        overdue_date_id: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'chaussures enfant',
        _ref: 'cerxs04',
        description: 'chaussures solides, rouge, taille xs',
        HT_price: 25,
        lead_time: 1,
        tva_id: 1,
        overdue_date_id: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
    ])

// insert product-category and product feature association
    await queryInterface.bulkInsert('productcategory', [
      {
        product_id: 1,
        category_id: 4,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 3,
        category_id: 8,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 4,
        category_id: 12,
        createdAt: new Date(),
        updatedAt:new Date()
      },
    ])

    await queryInterface.bulkInsert('productfeature', [
      {
        product_id: 1,
        feature_id: 4,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 2,
        feature_id: 4,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 3,
        feature_id: 8,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        product_id: 4,
        feature_id: 12,
        createdAt: new Date(),
        updatedAt:new Date()
      },
    ])
  },

  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tva', null, {});
  }
};
