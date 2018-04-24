/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
   var Student = sequelize.define('Student', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: 'Wrong email format!'
            },
            isUnique: function(value, next) {
               let condition = {
                  email: value
               };
               // Condition for Edit Teacher
               let new_student = this.id == null;
               if (!new_student) {
                  condition = {
                     email: value,
                     id: {
                        [Op.ne]: this.id
                     }
                  };
               }
               Student.find({
                     condition
                  })
                  .then(function(email) {
                     if (email && new_student) {
                        return next('Email address already in use!');
                     } else {
                        next();
                     }
                  }).catch(function(err) {
                     return next(err);
                  });
            }
         }
      },
      phone: {
         type: DataTypes.STRING,
         validate: {
            len: {
               args: [10, 13],
               msg: 'Phone length must be 10-13'
            },
            not: {
               args: ["[a-z][A-Z]", 'i'],
               msg: 'Phone not allow letters'
            }
         }
      }
   }, {});
   Student.associate = function(models) {
      // associations can be defined here
      Student.belongsToMany(models.Subject, {
         through: models.StudentSubject
      });
      Student.hasMany(models.StudentSubject);
   };

   Student.prototype.getFullName = function() {
      return `${this.first_name} ${this.last_name}`;
   };

   // Student.prototype.listSubject = function(id) {
   //    return this.getSubjects();
   // };

   return Student;
};
