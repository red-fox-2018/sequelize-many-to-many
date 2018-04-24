const subject = require('express').Router();
const { Teacher, Subject } = require('../models');
const Controller = require ('../controllers/subject');

subject.get('/', Controller.index)

subject.get('/:id/teachers', Controller.viewTeachers)

subject.get('/add', Controller.addGet)

subject.post('/add', Controller.addPost)

subject.get('/edit/:id', Controller.updateGet)

subject.post('/edit/:id', Controller.UpdatePost)

subject.get('/:id/enrolledstudent', Controller.enrolled)

subject.get('/:id/givescore/:studentid', Controller.givescoreGet)

subject.post('/:id/givescore/:studentid', Controller.givescorePost)

subject.get('/delete/:id', Controller.delete)


module.exports = subject;
