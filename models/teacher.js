'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
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
        //   Teacher.find({
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
  },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
