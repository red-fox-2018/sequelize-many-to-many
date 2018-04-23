
const express = require('express')
const router = express.Router()
const { StudentController } = require('./../controllers');

// @todo routing
// GET /students/:id/addsubject     show data student
// POST /students/:id/addsubject    handle input form

// GET /student | GET
router.get('/', (req, res) => {
  StudentController
    .getAll()
    .then(students => {
      // res.send(students);
      res.render('student/page-student-index', { students });
    }).catch(err => {
      console.log(err);
      res.redirect('/student');
    });
});

// @router GET /student/add
router.get('/add', (req, res) => {
  res.render('student/page-student-add');
});

// POST /student | POST
router.post('/add', (req, res) => {
  let values = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }
  StudentController.insert(values)
    .then(() => {
      res.redirect('/student');
    })
    .catch((err) => {
      console.log(err);
      res.render('student/page-student-add', { err: err.message });
    })
});

// DELETE /student/delete/:id | GET
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  StudentController.delete(id)
    .then(() => {
      res.redirect('/student');
    })
    .catch(err => {
      res.redirect('./student');
      console.log(err.message);
    })
});

// UPDATE /student/update/:id | GET
router.get('/update/:id', (req, res) => {
  let id = req.params.id;
  StudentController.findById(id)
    .then(student => {
      res.render('student/page-student-edit', { student });
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/student');
    });
});

// /update/:id/
router.post('/update/:id', (req, res) => {
  let id = req.params.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  StudentController.update(id, { firstName, lastName, email })
    .then(() => {
      res.redirect('/student');
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/student');
    });
});

module.exports = router;