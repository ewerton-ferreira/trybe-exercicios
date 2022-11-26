'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Código Da Vinci',
        author: 'Dan Brown',
        pageQuantity: 432,
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'Origem',
        author: 'Dan Brown',
        pageQuantity: 656,
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'Ofício de escrever',
        author: 'Fernando Sabino',
        pageQuantity: '224',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'No fim dá certo',
        author: 'Stephen King',
        pageQuantity: '1248',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'Mantenha o Foco',
        author: 'Ana Flávia Miziara',
        pageQuantity: '36',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason',
        pageQuantity: '160',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'Atitude mental positiva',
        author: 'Napoleon Hill',
        pageQuantity: '320',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
      {
        title: 'Quem pensa enriquece',
        author: 'Napoleon Hill',
        pageQuantity: '368',
        createdAt: new Date('2022-11-25T23:51:20.123Z'),
        updatedAt: new Date('2022-11-25T23:51:20.123Z'),
      },
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
