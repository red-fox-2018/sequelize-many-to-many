const route = require('express').Router()
const {Teacher, Subject} = require('../models')

route.get('/', (req, res) => {
  Teacher.findAll({
    include: [
      {
        model: Subject
      }
    ],
    order: [
      ['id', 'ASC']
    ]
  })
  .then((teachers) => {
    res.render('teacher', {teacherData: teachers})
  })
})

route.get('/add', (req, res) => {
  Subject.findAll()
  .then((subjects) => {
    res.render('form_teacher', {subjectList: subjects})
  })
  .catch((err) => [
    res.render('form_teacher', {subjectList: subjects, err})
  ])
})

route.post('/add', (req, res) => {
  Teacher.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    SubjectId: req.body.SubjectId
  })
  .then((newTeacher) => {
    res.redirect('/')
  })
  .catch((err) => {
    Subject.findAll()
    .then((subjects) => {
      res.render('form_teacher', {subjectList: subjects, errors: err.errors})
    })
  })
})

route.get('/edit/:id', (req, res) => {
  Teacher.findById(req.params.id)
  .then((teacher) => {
    Subject.findAll()
    .then((subjects) => {
      res.render('edit_form_teacher', {teacherData: teacher, subjectList: subjects})
    })
  })
})

route.post('/edit/:id', (req, res) => {
  Teacher.findById(req.params.id)
  .then((teacher) => {
    teacher.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
    .then((edited) => {
      res.redirect('/')
    })
    .catch((err) => {
      res.render('/edit/:id', {er})
    })
  })
})

route.get('/delete/:id', (req, res) => {
  Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

module.exports = route
