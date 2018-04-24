'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student,{
      through: models.StudentSubjects
    })
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};