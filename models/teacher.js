'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
        validate:{
          isEmail: {
            args: true,
            msg : `invalid email`
          },
          isUnique: function (value, next) {
            let query
            if (this.id != null) {
              query = {
                email: value,
                id: {
                  [Op.ne]: this.id
                }
              }
            }else{
              query = {
                email: value
              }
            }
            Teacher.findOne({where:
                query
            })
            .then(function (status) {
              if (status) {
                return next('Email is already exist!');
              }else{
                return next();
              }
          })
          .catch(function (err) {
            return next(err);
          });
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
