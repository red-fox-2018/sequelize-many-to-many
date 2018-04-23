'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        first_name: 'Akbar',
        last_name: 'Sahata',
        email: 'akbarsahata@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Agindo',
        last_name: 'Rahmat',
        email: 'agindorahmat@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Dui',
        last_name: 'Sumbang',
        email: 'duisumbang@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
  }
};
