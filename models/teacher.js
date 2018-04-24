'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
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
    },
    SubjectId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (teacher, option) => {
        if(teacher.last_name == ''){
          teacher.last_name = 'Hacktiv8'
        }
      }
    }
  });

  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
