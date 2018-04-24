'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,{
      through: models.StudentSubjects
    })
  };
  Student.prototype.getFullname = function(){
    return this.first_name + ' ' + this.last_name
  }
  return Student;
};