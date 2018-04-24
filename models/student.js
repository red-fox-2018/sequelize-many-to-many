'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format is incorrect'
        }
        // ,
        // isUnique: function(value, next) {
        //   Student.find({
        //     where: {
        //       email: value
        //     },
        //     attributes: ['id']
        //   })
        //   .then((err, user) => {
        //     if(err || user) {
        //       return next('email address already in used');
        //       next()
        //     }
        //   })
        // }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, {through: models.SubjectStudent})
    Student.hasMany(models.SubjectStudent)
  };
  return Student;
};
