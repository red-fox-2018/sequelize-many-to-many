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
          msg: 'Email harus ada @ dan .'
        },
        isUnique: function(email,callback) {
          Student.findOne({
            where : {email:email}
          })
          .then(function(found){
            if(found){
              callback('Email sudah ada di database')
            }else{
              callback()
            }
          })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,
      {
        through: models.StudentSubject
      }
    );
  };
  return Student;
};