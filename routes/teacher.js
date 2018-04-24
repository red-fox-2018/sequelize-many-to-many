/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const router = require('express').Router();
const TeacherController = require('../controllers/teacher');

router.get('/', TeacherController.index);
router.get('/add', TeacherController.add);
router.post('/', TeacherController.create);
router.get('/:id/edit', TeacherController.edit);
router.post('/:id/edit', TeacherController.update);
router.get('/:id/delete', TeacherController.delete);
router.post('/:id/delete', TeacherController.destroy);

module.exports = router;
