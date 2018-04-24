'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };

  Teacher.prototype.getFullname = function(){
    return this.first_name + ' ' + this.last_name
  }
  return Teacher;
};