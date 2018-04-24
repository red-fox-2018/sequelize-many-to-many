/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
       first_name: 'Nikolas',
       last_name: 'Friesen',
       gender: 'female',
       birthday: '1998-12-24',
       email: 'agustina_braun@wintheiser.info',
       phone: '449.897.7415'
    }, {
       first_name: 'Randi',
       last_name: 'Halvorson',
       gender: 'male',
       birthday: '1997-01-29',
       email: 'heber.upton@bechtelarwisozk.biz',
       phone: '(697)436-2633'
    }, {
       first_name: 'Sally',
       last_name: 'Buckridge',
       gender: 'female',
       birthday: '1997-10-30',
       email: 'nora@trautel.name',
       phone: '1-351-672-6358x020502'
    }, {
       first_name: 'Morris',
       last_name: 'Swift',
       gender: 'male',
       birthday: '1995-06-27',
       email: 'cordell@sanfordkuhlman.org',
       phone: '(600)142-5639x9380'
    }, {
       first_name: 'Sidney',
       last_name: 'Ortiz',
       gender: 'male',
       birthday: '1997-04-04',
       email: 'erling@davis.name',
       phone: '554.1703265'
    }, {
       first_name: 'Reid',
       last_name: 'Skiles',
       gender: 'male',
       birthday: '1994-10-13',
       email: 'mike_harvey@nikolaus.com',
       phone: '(543)511-2123'
    }, {
       first_name: 'Violet',
       last_name: 'Dickens',
       gender: 'female',
       birthday: '1994-11-19',
       email: 'rubye_olson@collins.biz',
       phone: '1-410-486-1411x5058'
    }, {
       first_name: 'Margueirite',
       last_name: 'Flatley',
       gender: 'female',
       birthday: '1995-05-28',
       email: 'wanda_okon@hane.name',
       phone: '572.978.5828x07860'
    }, {
       first_name: 'Cary',
       last_name: 'Schoen',
       gender: 'male',
       birthday: '1996-07-31',
       email: 'fay@runolfon.biz',
       phone: '1-828-134-7828x66958'
    }, {
       first_name: 'Mazie',
       last_name: 'Gibson',
       gender: 'female',
       birthday: '1995-09-23',
       email: 'doug@roberts.biz',
       phone: '144.038.7351x24117'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
