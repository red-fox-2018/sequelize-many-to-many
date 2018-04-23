'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    // email: DataTypes.STRING
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email Format',
        },
        isUnique: function (value, next) {
          var self = this;
          Student.find({ where: { email: value } })
            .then(function (user) {
              if (user && self.id != user.id) {
                return next('Email already in use!');
              }
              return next()
            })
            .catch(function (err) {
              return next(err)
            })
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, {
      through: models.SubjectStudent
    });
  };
  return Student;
};