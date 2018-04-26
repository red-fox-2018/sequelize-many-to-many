'use strict';

const { sequelize } = require('../models')

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
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultvalue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultvalue: sequelize.literal('NOW()')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};