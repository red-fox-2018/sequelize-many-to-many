const express = require('express');
const route = express.Router();
const model = require('../models');
const controller = require('../controllers/teacher')

route.get('/', controller.getAllTeachers)

route.get('/add-teacher', controller.getAddTeacher)

route.post('/add-teacher', controller.postAddTeacher)

route.get('/edit-teacher/:id', controller.getEditTeacher)


route.post('/edit-teacher/:id', controller.postEditTeacher)

route.get('/delete-teacher/:id', controller.getDeleteTeacher)

module.exports = route
