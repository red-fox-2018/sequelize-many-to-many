'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubjectStudent = sequelize.define('SubjectStudent', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  SubjectStudent.associate = function(models) {
    // associations can be defined here
    SubjectStudent.belongsTo(models.Subject)
    // SubjectStudent.hasMany(models.Student)
  };
  return SubjectStudent;
};