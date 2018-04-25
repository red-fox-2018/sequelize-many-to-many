'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
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
            Student.findOne({where:
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
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject,{"through":models.SubjectStudent})
    // Student.hasMany(models.SubjectStudent)
  };
  return Student;
};
