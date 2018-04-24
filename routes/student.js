const routes = require('express').Router();
const Controller = require('../controllers/student');
const StudentSubject = require('../controllers/studentSubject');
const Subject = require('../controllers/subject');

// Show Data Student
routes.get('/', (req, res) => {
  Controller.read_all((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.render('students/student', {
        students: data
      })
    }
  })
})

// Add Student
routes.get('/add', (req, res) => {
  res.render('students/add-student')
})

routes.post('/add', (req, res) => {
  Controller.add(req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/students');
    }
  })
})

// Edit Student
routes.get('/edit/:id', (req, res) => {
  Controller.read_one(req.params.id, (err, data) => {
    if (!err) {
      res.render('students/edit-student', {
        student: data
      })
    }
  })
})

routes.post('/edit/:id', (req, res) => {
  Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/students');
    }
  })
})

// Delete Student
routes.get('/delete/:id', (req, res) => {
  Controller.erase(req.params.id, (errStudent, dataStudent) => {
    StudentSubject.erase(req.params.id, 'StudentId', (err, data) => {
      if (!errStudent) {
        res.redirect('/students')
      }
    })
  })
})

// Add Subject to Student
routes.get('/:id/addsubject', (req, res) => {
  Controller.read_one(req.params.id, (errStudent, dataStudent) => {
    Subject.read_all((err, data) => {
      if (!errStudent) {
        res.render('students/add-subject', {
          student: dataStudent,
          subjects: data
        })
      }
    })
  })
})

routes.post('/:id/addsubject', (req, res) => {
  Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, (errStudent, dataStudent) => {
    StudentSubject.add(req.params.id, req.body.SubjectId, (err, data) => {
      if (!errStudent) {
        res.redirect('/students');
      }
    })
  })
})

module.exports = routes;