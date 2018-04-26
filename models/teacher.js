'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Email format is incorrect`
        },
        isUnique: function(value, next) {
          Teacher.find({
            where: {
              email: value
            },
            attributes: ['id']
          })
          .then(function(error, user){
            if(error || user)
            return next('Email Already taken')
            next()
          })
          .catch(function(err){
            return next(err)
          })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};