const student = require ('express').Router();
const StudentController = require('../controllers/student');


student.get('/', StudentController.list)

student.get('/add-student', StudentController.create_get)

student.post('/add-student', StudentController.create_post)

student.get('/edit-student/:id', StudentController.update_get)

student.post('/edit-student/:id', StudentController.update_post)

student.get('/:id/addsubject', StudentController.addSubject_get)

student.post('/:id/addsubject', StudentController.addSubject_post)

student.get('/delete/:id', StudentController.delete)

module.exports = student;
