const route = require('express').Router()
const {Student, Subject, SubjectStudent} = require('../models')

route.get('/', (req, res) => {
  Student.findAll({
    include: [
      {
        model: Subject, SubjectStudent
      }
    ],
    order: [
      ['id', 'ASC']
    ]
  })
  .then((students) => {
    res.render('students', {studentData: students})
  })
})

route.get('/add', (req, res) => {
  res.render('form_student')
})

route.post('/add', (req, res) => {
  Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then((newStudent) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('form_student', {message: err.errors})
  })
})

route.get('/edit/:id', (req, res) => {
  Student.findById(req.params.id)
  .then((student) => {
    res.render('edit_form', {studentData: student})
  })
})

route.post('/edit/:id', (req, res) => {
  Student.findById(req.params.id)
  .then((student) => {
    student.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
    .then((edited) => {
      res.redirect('/')
    })
    .catch((err) => {
      res.render('/edit/:id')
    })
  })
})

route.get('/delete/:id', (req, res) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

route.get('/:id/addSubject', (req, res) => {
  Student.findById(req.params.id)
  .then((student) => {
    Subject.findAll()
    .then((subjects) => {
      res.render('add_subject', {dStudent: student, dSubject: subjects})
    })
  })
})

route.post('/:id/addSubject', (req, res) => {
  SubjectStudent.create({
    SubjectId: req.body.SubjectId,
    StudentId: req.params.id
  })
  .then((addedSubject) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('add_subject', {msg: err.errors})
  })
})

module.exports = route
