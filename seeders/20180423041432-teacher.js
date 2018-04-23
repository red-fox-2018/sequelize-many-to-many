'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Teachers',
   [
     {
       firstName: 'Khabib',
       lastName: 'Nurmagamedov',
       email: 'khabib@gmail.com',
       SubjectId: 1,
     },
     {
       firstName: 'Tony',
       lastName: 'Ferguson',
       email: 'tony@gmail.com',
       SubjectId: 2,
     }
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
