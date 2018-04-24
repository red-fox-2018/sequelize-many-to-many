/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/


const router = require('express').Router();
const SubjectController = require('../controllers/subject');

router.get('/', SubjectController.index);
router.get('/:id/viewteachers', SubjectController.viewTeachers);
router.get('/:id/enrolledstudents', SubjectController.enrolledStudents);
router.post('/:id/enrolledstudents', SubjectController.createScore);
router.get('/add', SubjectController.add);
router.post('/', SubjectController.create);
router.get('/:id/score', SubjectController.score);
router.post('/:id/score', SubjectController.createScore);
router.get('/:id/edit', SubjectController.edit);
router.post('/:id/edit', SubjectController.update);
router.get('/:id/delete', SubjectController.delete);
router.post('/:id/delete', SubjectController.destroy);


module.exports = router;
