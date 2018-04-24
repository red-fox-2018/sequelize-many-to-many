'use strict';
const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teachers', {
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
      SubjectId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Teachers');
  }
};