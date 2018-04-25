/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var StudentSubject = sequelize.define('StudentSubject', {
      StudentId: DataTypes.INTEGER,
      SubjectId: DataTypes.INTEGER,
      score: DataTypes.INTEGER
   }, {});
   StudentSubject.associate = function(models) {
      // associations can be defined here
      StudentSubject.belongsTo(models.Student);
      StudentSubject.belongsTo(models.Subject);
   };

   return StudentSubject;
};
