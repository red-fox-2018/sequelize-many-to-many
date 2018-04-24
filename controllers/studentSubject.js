'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.StudentSubject.findAll()
      .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.StudentSubject.findOne({
        where: {
          SubjectId: id
        }
      })
      .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(StudentId, SubjectId, callback) {
    Model.StudentSubject.create({
        StudentId,
        SubjectId
      })
      .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, score, callback) {
    Model.StudentSubject.update({
        score
      }, {
        where: {
          SubjectId: id
        }
      })
      .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, column, callback) {
    let objDelete;

    switch (column) {
      case 'SubjectId':
        objDelete = { SubjectId: id }
        break;
      case 'StudentId':
        objDelete = { StudentId: id }
        break;
      default:
        break;
    }

    Model.StudentSubject.destroy({
      where: objDelete
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