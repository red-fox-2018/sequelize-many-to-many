'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format incorrect!'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject, { through: models.StudentSubject });
  };
  return Student;
};