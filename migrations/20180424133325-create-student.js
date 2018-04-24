/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

const {
   sequelize
} = require('../models');

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Students', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         first_name: {
            type: Sequelize.STRING
         },
         last_name: {
            type: Sequelize.STRING
         },
         gender: {
            type: Sequelize.STRING
         },
         birthday: {
            type: Sequelize.STRING
         },
         email: {
            type: Sequelize.STRING
         },
         phone: {
            type: Sequelize.STRING
         },
         createdAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()')
         },
         updatedAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()')
         }
      }, {
         timestamps: true
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Students');
   }
};
