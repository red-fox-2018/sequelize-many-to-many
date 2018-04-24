'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Student.findAll({
      include: [{
        model: Model.Subject,
      }],
      order: [
        ['id', 'ASC']
      ]
    })
      .then(students => {
        callback(null, students);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Student.findOne({
        where: {
          id: id
        }
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(first_name, last_name, email, callback) {
    Model.Student.create({
        first_name,
        last_name,
        email
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, first_name, last_name, email, callback) {
    Model.Student.update({
        first_name,
        last_name,
        email
      }, {
        where: {
          id: id
        }
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Student.destroy({
      where: {
        id: id
      }
    })
    .then(student => {
      callback(null, student);
    })
    .catch(err => {
      callback(err, null);
    })
  }
}

module.exports = Controller;