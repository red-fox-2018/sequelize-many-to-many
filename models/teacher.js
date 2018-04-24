'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        },
        isUnique(value, next) {
          // Condition for Add Teacher
          let condition = {
            email: value
          }
          // Condition for Edit Teacher
          if (this.id != null) {
            condition = {
              email: value,
              id: {
                [Op.ne]: this.id
              }
            }
          }

          sequelize.models.Teacher.findOne({
              where: condition
            })
            .then(emailInput => {
              if (emailInput) {
                next('Email is already exist');
              } else {
                next()
              }
            })
            .catch(err => {
              next(err);
            })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (teacher, options) => {
        if (teacher.last_name === '') {
          teacher.last_name = 'Hacktiv8'
        }
      }
    }
  });
  Teacher.associate = function (models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject);
  };
  return Teacher;
};