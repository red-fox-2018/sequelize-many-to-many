const { Student } = require('../models')
const model = require('../models');

class StudentController {

  static getStudents(req, res){
      model.Student.findAll({order:["id"]})
      .then(function(student_data){
          res.render('students', {student_data});
      })
  }

  static getAdd(req, res){
    res.render('add-student', {err:{message:0}});
  }

  static postAdd(req, res){
    model.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(responds => res.redirect('/students'))
    .catch(err => {
          res.render('add-student', {err});
    })
  }

  static getEditStudent(req, res){
      let newId = parseInt(req.params.id);
      model.Student.findOne({
          where: {
              id: newId
          }
      })
      .then(function(student_data){
          res.render('edit-student', {student_data,err:{message:0}});
      })
  }

  static postEditStudent(req, res){
      let id = parseInt(req.params.id);
      model.Student.update({
          id:id,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
      },{
          where: {id: id}
      })
      .then(responds => res.redirect('/students'))
      .catch(err=>{
        let newId = parseInt(req.params.id);
        model.Student.findOne({
            where: {
                id: newId
            }
        })
        .then(function(student_data){
            res.render('edit-student', {student_data,err});
        })
      })
  }

  static getSubject(req,res){
    let newId = parseInt(req.params.id);
    model.Student.findOne({
        where: {
            id: newId
        }
    })
    .then(function(student_data){
      model.Subject.findAll()
      .then(subject=>{
        res.render('studentsubject', {student_data,subject});
      })
    })
  }

  static postSubject(req,res){
      const new_studentsubject = {
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
      }
    model.SubjectStudent.create(new_studentsubject)
    .then(responds => res.redirect('/students'))
  }

  static deleteStudent(req, res){
      let id = parseInt(req.params.id);
      model.Student.destroy({
          where: {
              id: id
          }
      })
      .then(responds => res.redirect('/students'))
  }

}
module.exports = StudentController
