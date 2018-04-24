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
   return queryInterface.bulkInsert('Teachers',[
    {
      first_name: 'anton',
      last_name: 'Suroton',
      email: 'antonsuroton@sekolah.id',
      SubjectId: 1
    },
    {
      first_name: 'Riki',
      last_name: 'Maru',
      email: 'rikimaru@sekolah.id',
      SubjectId: 2
    },
    {
      first_name: 'Jhon',
      last_name: 'Cena',
      email: 'jhoncena@sekolah.id',
      SubjectId: 3
    },
    {
      first_name: 'Bod',
      last_name: 'Zon',
      email: 'manDom@sekolah.id',
      SubjectId: 4
    }
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
