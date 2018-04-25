const { Subject } = require('../models')
const model = require('../models');

class SubjectController{
  static getAllSubjects(req,res){
      model.Subject.findAll({include: model.Teacher})
      .then(function(subject_data){
        console.log(subject_data)
          res.render('subjects', {subject_data});
      })
  }

  static getAddSubject(req, res){
      res.render('add-subject');
  }

  static postAddSubject(req, res){
    model.Subject.create({
        subject_name: req.body.subject_name
    })
      .then(responds => res.redirect('/subjects'))
  }

  static getEditSubject(req, res){
      let id = parseInt(req.params.id);
      model.Subject.findOne({
          where: {
              id: id
          }
      })
      .then(function(subject_data){
          res.render('edit-subject', {subject_data});
      })
  }

  static postEditSubject(req, res){
      let id = parseInt(req.params.id);
      model.Subject.update({
          subject_name: req.body.subject_name
      },{
          where: {id: id}
      })
      .then(responds => res.redirect('/subjects'))
  }

  static getScore(){

  }

  static postScore(){

  }


  static getDeleteSubject(req, res){
      let id = parseInt(req.params.id);
      model.Subject.destroy({
          where: {
              id: id
          }
      })
      .then(responds => res.redirect('/subjects'))
  }
}

module.exports = SubjectController
