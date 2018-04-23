
const express = require('express')
const router = express.Router()
const { TeacherController } = require('./../controllers');
const { SubjectController } = require('./../controllers');

// @router GET /teacher
router.get('/', (req, res) => {
  TeacherController
    .getAll()
    .then(teachers => {
      // res.send(teachers);
      res.render('teacher/page-teacher-index', { teachers });
    }).catch(err => {
      console.log(err);
      res.redirect('/teacher');
    });
});

// @router GET /teacher/add
router.get('/add', (req, res) => {
  SubjectController.getAll()
    .then(subjects => {
      // res.send(subjects);
      res.render('teacher/page-teacher-add', { subjects });
    })
});

// @router POST /teacher/add
router.post('/add', (req, res) => {
  let values = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    SubjectId: req.body.SubjectId
  }
  TeacherController.insert(values)
    .then(() => {
      res.redirect('/teacher');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/teacher');
    })
});

// DELETE /teacher/delete/:id | GET
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  TeacherController.delete(id)
    .then(() => {
      res.redirect('/teacher');
    })
    .catch(err => {
      res.redirect('./teacher');
      console.log(err.message);
    })
});

// UPDATE /teacher/update/:id | GET
router.get('/update/:id', (req, res) => {
  let id = req.params.id;
  TeacherController.findById(id)
    .then(teacher => {
      SubjectController.getAll()
      .then(subjects => {
        res.render('teacher/page-teacher-edit', { teacher, subjects });
      })
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/teacher');
    });
});

router.post('/update/:id', (req, res) => {
  let id = req.params.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let SubjectId = req.body.SubjectId;

  TeacherController.update(id, { firstName, lastName, email, SubjectId })
    .then(() => {
      res.redirect('/teacher');
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/teacher');
    });
});

module.exports = router;