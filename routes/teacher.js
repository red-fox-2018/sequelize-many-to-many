const teacher = require('express').Router();
const { Teacher, Subject } = require('../models');
const Controller = require ('../controllers/teacher')

// teacher.locals.teacherHelpers = require ('../helpers/teacherHelper')

teacher.get('/', Controller.index)

teacher.get('/add', Controller.addGet)

teacher.post('/add', Controller.addPost)

teacher.get('/edit/:id', Controller.updateGet)

teacher.post('/edit/:id', Controller.UpdatePost)

teacher.get('/delete/:id', Controller.delete)

module.exports = teacher;
