/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var Subject = sequelize.define('Subject', {
      name: DataTypes.STRING
   }, {});
   Subject.associate = function(models) {
      // associations can be defined here
      Subject.hasMany(models.Teacher);
      Subject.belongsToMany(models.Student, {
         through: models.StudentSubject
      });
      Subject.hasMany(models.StudentSubject);
   };

   return Subject;
};
