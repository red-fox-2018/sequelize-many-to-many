'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Subjects', [
        {
        name: 'Fisika',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
        name: 'Ekonomi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
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
