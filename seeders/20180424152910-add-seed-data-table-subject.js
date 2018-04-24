/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Subjects', [{
         name: 'Kimia'
      }, {
         name: 'Ekonomi'
      }, {
         name: 'Fisika'
      }, {
         name: 'Bahasa Inggris'
      }, {
         name: 'Matematika'
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Subjects', null, {});
   }
};
