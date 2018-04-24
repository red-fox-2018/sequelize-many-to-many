'use strict';
const Sequelize = require ('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student_Subject = sequelize.define('Student_Subject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score:{
      type: DataTypes.INTEGER,
      [Op.lt]: 1001
    }
  }, {});
  Student_Subject.associate = function(models) {
    // associations can be defined here
    Student_Subject.belongsTo(models.Subject)
    Student_Subject.belongsTo(models.Student)
  };
  return Student_Subject;
};
