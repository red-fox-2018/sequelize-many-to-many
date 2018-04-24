'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentSubjects', [
      {
        StudentId: 1,
        SubjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        StudentId: 2,
        SubjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        StudentId: 1,
        SubjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        StudentId: 2,
        SubjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
