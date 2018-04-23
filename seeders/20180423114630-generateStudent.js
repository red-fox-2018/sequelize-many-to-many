'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Students',[
     {
      first_name: 'Akbar',
      last_name: 'Dzikrullah',
      email:'dzik@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      first_name: 'Alegando',
      last_name: 'Serenade',
      email:'gando@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      first_name: 'Maximus',
      last_name: 'Octav',
      email:'max@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
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
