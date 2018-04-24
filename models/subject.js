'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});

  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher)
    Subject.belongsToMany(models.Student, {
      through: models.Student_Subject
    })
    Subject.hasMany(models.Student_Subject)
  };
  return Subject;
};
