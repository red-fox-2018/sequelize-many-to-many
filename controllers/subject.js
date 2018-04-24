'use strict';
const Model = require('../models');

class Controller {
  static enroll(id, callback) {
    Model.Subject.findOne({
        include: [
          Model.Student
        ],
        where: {
          id: id
        },
        order: [
          ['id', 'ASC']
        ]
      })
      .then(subjects => {
        callback(null, subjects);
      })
      .catch(err => {
        callback(err, null)
      })
  }

  static read_all(callback) {
    Model.Subject.findAll({
        include: [
          Model.Teacher
        ],
        order: [
          ['id', 'ASC']
        ]
      })
      .then(subjects => {
        callback(null, subjects);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Subject.findOne({
        where: {
          id: id
        }
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(subject_name, callback) {
    Model.Subject.create({
        subject_name
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, subject_name, callback) {
    Model.Subject.update({
        subject_name
      }, {
        where: {
          id: id
        }
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Subject.destroy({
        where: {
          id: id
        }
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }
}

module.exports = Controller;