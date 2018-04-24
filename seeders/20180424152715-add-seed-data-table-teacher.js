/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [{
         first_name: 'Bambang',
         last_name: 'Suprapto',
         gender: 'male',
         email: 'bambangsuprapto@sekolah.id',
         phone: '111-999-000',
         SubjectId: null
      }, {
         first_name: 'Rukmana',
         last_name: 'Fatmawati',
         gender: 'female',
         email: 'rukmanafatmawati@sekolah.id',
         phone: '555-786-987',
         SubjectId: null
      }, {
         first_name: 'Butet',
         last_name: 'Naiborhu',
         gender: 'female',
         email: 'butetnaiborhu@sekolah.id',
         phone: '345-678-123',
         SubjectId: null
      }, {
         first_name: 'Yulius',
         last_name: 'Prawinegara',
         gender: 'male',
         email: 'yuliusprawinegara@sekolah.id',
         phone: '021-322-223',
         SubjectId: null
      }, {
         first_name: 'Andrew',
         last_name: 'Wommack',
         gender: 'male',
         email: 'andrewwommack@sekolah.id',
         phone: '021-355-225',
         SubjectId: null
      }, {
         first_name: 'Paul',
         last_name: 'Milligan',
         gender: 'male',
         email: 'paulmilligan@sekolah.id',
         phone: '555-665-556',
         SubjectId: null
      }, {
         first_name: 'Jammy',
         last_name: 'Gracies',
         gender: 'female',
         email: 'jammygracias@sekolah.id',
         phone: '021-333-888',
         SubjectId: null
      }, {
         first_name: 'Sharon',
         last_name: 'Rich',
         gender: 'female',
         email: 'sharonrich@sekolah.id',
         phone: '033-333-888',
         SubjectId: null
      }, {
         first_name: 'Barry',
         last_name: 'Burns',
         gender: 'male',
         email: 'barryburns@sekolah.id',
         phone: '432-111-222',
         SubjectId: null
      }, {
         first_name: 'David',
         last_name: 'Joshua',
         gender: 'male',
         email: 'davidjoshua@sekolah.id',
         phone: '555-888-777',
         SubjectId: null
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});
   }
};
