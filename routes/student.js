/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const router = require('express').Router();
const StudentController = require('../controllers/student');


router.get('/', StudentController.index);
router.get('/add', StudentController.add);
router.post('/', StudentController.create);
router.get('/:id/addsubject', StudentController.addSubject);
router.post('/:id/addsubject', StudentController.createSubject);
router.get('/:id/edit', StudentController.edit);
router.post('/:id/edit', StudentController.update);
router.get('/:id/delete', StudentController.delete);
router.post('/:id/delete', StudentController.destroy);


module.exports = router;
