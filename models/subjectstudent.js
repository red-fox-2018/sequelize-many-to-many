'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubjectStudent = sequelize.define('SubjectStudent', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  SubjectStudent.associate = function(models) {
    // associations can be defined here
    // SubjectStudent.belongsTo(models.Student)
    // SubjectStudent.belongsTo(models.Teacher)

  };
  return SubjectStudent;
};
