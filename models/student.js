'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args: true,
          msg: 'Email format : example@mail.com'
        },
        isUnique: function(value, next){

          Teacher.find({
            where: {email: value},
            attributes: ['id']
          })
          .then((err, user) => {
            if(err || user){
              return next('email already use')
              next()
            } else {
              next()
            }
          })
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (teacher, option) => {
        if(teacher.last_name == ''){
          teacher.last_name = 'Hacktiv8'
        }
      }
    }
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
