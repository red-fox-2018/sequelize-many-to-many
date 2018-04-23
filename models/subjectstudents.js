'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubjectStudents = sequelize.define('SubjectStudents', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  SubjectStudents.associate = function(models) {
    models.Subject.belongsToMany(models.Student, { through: SubjectStudents })
    models.Student.belongsToMany(models.Subject, { through: SubjectStudents })
  };
  return SubjectStudents;
};