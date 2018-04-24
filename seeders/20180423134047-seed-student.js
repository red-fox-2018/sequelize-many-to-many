'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        firstName: 'Akbar',
        lastName: 'Sahata',
        email: 'akbarsahata@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Agindo',
        lastName: 'Rahmat',
        email: 'agindorahmat@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Dui',
        lastName: 'Sumbang',
        email: 'duisumbang@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
