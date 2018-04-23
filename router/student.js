const studentRouter = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');

studentRouter.get('/', function (req, res) {
  res.send('HELLO WORLD')
})

studentRouter.get('/students', function (req, res) {
  db.Student.findAll()
    .then(students => {
      res.render('student/students', { students })
    })
    .catch(error => {

    });
});

studentRouter.get('/students/add', function (req, res) {
  res.render('student/add');
});
studentRouter.post('/students/add', urlencodedParser, function (req, res) {
  let studentData = req.body;
  db.Student.create(studentData)
    .then(
      student => {
        res.redirect('/students/add');
      })
    .catch(
      error => {
        res.render('student/add', error.errors[0]);
      }
    )
})

studentRouter.get('/students/:id/addsubject', function (req, res) {
  let studentId = req.params.id;
  db.Student.findOne({
    where: {
      id: studentId
    }
  })
    .then(student => {
      db.Subject.findAll()
      .then(subjects => {
        res.render('student/addSubjectToStudent', { student: student, subjects: subjects });
      })
    })
    .catch(error => {

    });
});

studentRouter.post('/students/:id/addsubject', urlencodedParser, function(req, res) {
  let subjectId = req.body.subject_name;
  let studentId= req.params.id;
  db.SubjectStudent.create({
    StudentId: studentId, 
    SubjectId: subjectId})
  .then(function() {
    res.redirect('/subjects')
  })
  .catch(error => {

  });
});

module.exports = studentRouter