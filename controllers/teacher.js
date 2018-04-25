const { Teacher,Subject } = require('../models')
const model = require('../models')

class TeacherController{
  static getAllTeachers(req,res){
      model.Teacher.findAll({include:[model.Subject], order:["id"]})
      .then(function(teacher_data){
          res.render('teachers', {teacher_data});
      })
  }

  static getAddTeacher(req, res){
    model.Subject.findAll()
    .then(function(subject_data){
        res.render('add-teacher', {subject_data,err:{message:0}});
    })
  }

  static postAddTeacher(req, res){
      model.Teacher.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          SubjectId: req.body.SubjectId
      })
      .then(responds => res.redirect('/teachers'))
      .catch(err => {
        model.Subject.findAll()
        .then(function(subject_data){
            res.render('add-teacher', {subject_data, err});
        })
      })
  }

  static getEditTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.findOne({
          where: {
              id: id
          }
      })
      .then(function(teacher_data){
        model.Subject.findAll()
        .then(function(subject_data){
          res.render('edit-teacher', {teacher_data,subject_data,err:{message:0}});
        })
      })
  }

  static postEditTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.update({
          id: id,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          SubjectId: req.body.SubjectId
      },{
          where: {id: id}
      })
      .then(responds => res.redirect('/teachers'))
      .catch(err=>{
        let id = parseInt(req.params.id);
        model.Teacher.findOne({
            where: {
                id: id
            }
        })
        .then(function(teacher_data){
          model.Subject.findAll()
          .then(function(subject_data){
            res.render('edit-teacher', {teacher_data,subject_data,err});
          })
        })
      })
  }

  static getDeleteTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.destroy({
          where: {
              id: id
          }
      })
      .then(responds => res.redirect('/teachers'))
  }
}

module.exports = TeacherController
