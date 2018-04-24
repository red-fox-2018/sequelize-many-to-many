const { Student, Subject, Student_Subject } = require('../models')

class StudentController {
  static list(req, res){
    Student.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then( students => {
      res.render('students/list', {Students: students})
    })
  }

  static create_get(req, res){
    res.render('students/form', {error: null})
  }

  static create_post(req, res){
    Student.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    })
    .then(() => {
      res.redirect('/students')
    })
    .catch( err => {
      res.render('students/form', {error: err.message})
    })
  }

  static update_get(req, res){
    Student.findById(req.params.id)
    .then(student => {
      res.render('students/edit-form', {error: null, student: student})
    })
  }

  static update_post(req, res){
    Student.findById(req.params.id)
    .then( student => {
      student.update({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email
      }, {where: {id: req.params.id}})
      .then(() => {
        res.redirect('/students')
      })
      .catch(err => {
        Student.findById(req.params.id)
        .then(student => {
          res.render('students/edit-form', {error: err.message, student: student})
        })
      })
    })

  }

  static addSubject_get(req, res){
    Student.findById(req.params.id)
    .then( student => {
      Subject.findAll()
      .then(subjects => {
        res.render('students/add-subject', {subjects, student})
      })
    })
  }

  static addSubject_post(req, res){
    Student_Subject.create({
      StudentId: req.params.id,
      SubjectId: req.body.SubjectId,
      score: null
    })
    .then( (data) => {
      res.redirect('/students')
    })
  }

  static delete(req, res){
    Student.destroy({
      where: {id: req.params.id}
    })
    .then( () => {
      res.redirect('/students')
    })
  }

}
module.exports = StudentController
