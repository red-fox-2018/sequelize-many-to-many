'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubjectStudents', [
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
  }
};
