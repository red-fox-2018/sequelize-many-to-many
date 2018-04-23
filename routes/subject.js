
const express = require('express')
const router = express.Router()
const { SubjectController } = require('./../controllers');

// @todo routing
// GET subjects/:id/enrolledstudents
// GET subjects/:id/givescore
// POST subjects/:id/                   handle input data

router.get('/enrolledstudents', (req, res) => {
  SubjectController.getAllMultiple().then(enrolled => {
    res.send(enrolled);
  });
});

// GET /subject | GET
router.get('/', (req, res) => {
  SubjectController
    .getAll()
    .then(subjects => {
      // res.send(subjects);
      res.render('subject/page-subject-index', { subjects });
    }).catch(err => {
      console.log(err);
      res.redirect('/subject');
    });
});

// @router GET /subject/add
router.get('/add', (req, res) => {
  res.render('subject/page-subject-add');
});


// POST /subject | POST
router.post('/add', (req, res) => {
  let values = {
    name: req.body.name,
  }
  SubjectController.insert(values)
    .then(() => {
      res.redirect('/subject');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/subject');
    })
});

// DELETE /subject/delete/:id | GET
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  SubjectController.delete(id)
    .then(() => {
      res.redirect('/subject');
    })
    .catch(err => {
      res.redirect('./subject');
      console.log(err.message);
    })
});

// UPDATE /subject/update/:id | GET
router.get('/update/:id', (req, res) => {
  let id = req.params.id;
  SubjectController.findById(id)
    .then(subject => {
      // res.send(subject);
      res.render('subject/page-subject-edit', { subject });
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/subject');
    });
});

router.post('/update/:id', (req, res) => {
  let id = req.params.id;
  let name = req.body.name;

  SubjectController.update(id, { name })
    .then(() => {
      res.redirect('/subject');
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/subject');
    });
});

module.exports = router;