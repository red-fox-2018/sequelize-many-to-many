const routes = require('express').Router();
const Controller = require('../controllers/teacher');
const Subject = require('../controllers/subject');

// Show Data Teacher
routes.get('/', (req, res) => {
  Controller.read_all((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.render('teachers/teacher', {
        teachers: data
      })
    }
  })
})

// Add Teacher
routes.get('/add', (req, res) => {
  Subject.read_all((err, subjects) => {
    res.render('teachers/add-teacher', {
      err: err,
      subjects: subjects
    })
  })
})

routes.post('/add', (req, res) => {
  Controller.add(req.body.first_name, req.body.last_name, req.body.email, req.body.SubjectId, (err, data) => {
    if (!err) {
      res.redirect('/teachers');
    } else {
      Subject.read_all((errSubject, dataSubject) => {
        res.render('teachers/add-teacher', {
          err: err.message,
          subjects: dataSubject
        })
      })

    }
  })
})

// Edit Teacher
routes.get('/edit/:id', (req, res) => {
  Controller.read_one(req.params.id, (err, data) => {
    Subject.read_all((errSubject, dataSubject) => {
      res.render('teachers/edit-teacher', {
        err: err,
        teacher: data,
        subjects: dataSubject
      })
    })
  })
})

routes.post('/edit/:id', (req, res) => {
  Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, req.body.SubjectId, (err, data) => {
    if (!err) {
      res.redirect('/teachers');
    } else {
      Controller.read_one(req.params.id, (errTeacher, dataTeacher) => {
        Subject.read_all((errSubject, dataSubject) => {
          res.render('teachers/edit-teacher', {
            err: err.message,
            teacher: dataTeacher,
            subjects: dataSubject
          })
        })
      })
    }
  })
})

// Delete Teacher
routes.get('/delete/:id', (req, res) => {
  Controller.erase(req.params.id, (err, data) => {
    if (!err) {
      res.redirect('/teachers')
    }
  })
})

module.exports = routes;