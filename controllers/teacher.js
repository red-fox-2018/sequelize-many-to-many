'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Teacher.findAll({
        include: [
          Model.Subject
        ],
        order: [
          ['id', 'ASC']
        ]
      })
      .then(teachers => {
        callback(null, teachers);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Teacher.findOne({
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(first_name, last_name, email, SubjectId, callback) {
    Model.Teacher.create({
        first_name,
        last_name,
        email,
        SubjectId
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null)
      })
  }

  static edit(id, first_name, last_name, email, SubjectId, callback) {
    Model.Teacher.update({
        id,
        first_name,
        last_name,
        email,
        SubjectId
      }, {
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Teacher.destroy({
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }
}

module.exports = Controller;