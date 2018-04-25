const express = require('express');
const route = express.Router();

const controller = require('../controllers/student')

route.get('/', controller.getStudents)

route.get('/add-student', controller.getAdd)

route.post('/add-student', controller.postAdd)

route.get('/:id/addsubject', controller.getSubject)

route.post('/:id/addsubject', controller.postSubject)

route.get('/edit-student/:id', controller.getEditStudent)

route.post('/edit-student/:id', controller.postEditStudent)

route.get('/delete-student/:id', controller.deleteStudent)

module.exports = route
