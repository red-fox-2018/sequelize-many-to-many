'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student, { through: models.SubjectStudents})
  };
  return Subject;
};