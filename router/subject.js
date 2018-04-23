const subjectRouter = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');

subjectRouter.get('/', function (req, res) {
  res.send('HELLO SUBJECT')
})

subjectRouter.get('/subjects', function (req, res) {
  db.Subject.findAll({
    include: {
      model: db.Student
    }
  })
    .then(subjects => {
      res.render('subject/subjects', { subjects: subjects })
    })
})

subjectRouter.get('/subjects/:id/enrolledstudents', function (req, res) {
  let subjectId = req.params.id
  db.Subject.findOne({
    include: {
      model: db.Student,
    },
    where: {
      id: subjectId
    }
  })
    .then(subject => {
      res.render('subject/enrolledstudents', { subject: subject })
    })
})

subjectRouter.get('/subjects/:subjectId/enrolledstudents/:studentId', function (req, res) {
  let subjectId = req.params.subjectId
  let studentId = req.params.studentId

  // res.send(req.params)
  res.render('subject/addscore', { subjectId: subjectId, studentId: studentId })
});

subjectRouter.post('/subjects/:subjectId/enrolledstudents/:studentId', urlencodedParser, function (req, res) {
  let subjectId = req.params.subjectId;
  let studentId = req.params.studentId;
  let score = req.body.score;

  db.SubjectStudent.update(
    {
      score: score
    },
    {
      where: {
        SubjectId: subjectId,
        StudentId: studentId
      }
    })
    .then(subjectStudent => {
      res.redirect(`/subjects/${subjectId}/enrolledstudents`)
    })
});

module.exports = subjectRouter