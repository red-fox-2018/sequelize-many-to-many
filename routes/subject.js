const route = require('express').Router()
const {Subject, Teacher, Student, SubjectStudent} = require('../models')

route.get('/', (req, res) => {
  Subject.findAll({
    include: [{
      model: Teacher
    }, {
      model: Student
    }]
  })
  .then((subjects) => {
    res.render('subject', {subjectData: subjects})
  })
})

route.get('/add', (req, res) => {
  res.render('form_subject')
})

route.post('/add', (req, res) => {
  Subject.create({
    subject_name: req.body.subject_name
  })
  .then((newSubject) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('form_subject', err)
  })
})

route.get('/edit/:id', (req, res) => {
  Subject.findById(req.params.id)
  .then((subject) => {
    res.render('edit_form_subject', {subjectData: subject})
  })
})

route.post('/edit/:id', (req, res) => {
  Subject.findById(req.params.id)
  .then((subject) => {
    subject.update({
      subject_name: req.body.subject_name
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
  Subject.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

route.get('/:id/enrolledStudents', (req,res) => {
  SubjectStudent.find({
    where: {
      SubjectId: req.params.id
    },
    include: [{
      model: Student
    }, {
      model: Subject
    }]
  }, )
  .then((students) => {
    // res.send(students)
    res.render('enrolled_student', {dStudent: students})
  })
})

route.get('/:SubjectId/:StudentId/giveScore', (req, res) => {
  SubjectStudent.find({
    where: {
      SubjectId: req.params.SubjectId,
      StudentId: req.params.StudentId
    }
  })
  .then((student) => {
    res.render('give_score', {dStudent: student})
  })
})

route.post('/:SubjectId/:StudentId/giveScore', (req, res) => {
  SubjectStudent.find({
    where: {
      SubjectId: req.params.SubjectId,
      StudentId: req.params.StudentId
    }
  })
  .then((student) => {
    student.update({
      score: req.body.score
    })
    .then((updated) => {
      res.redirect('enrolled_student')
    })
  })
})

module.exports = route
