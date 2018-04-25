const express = require('express');
const route = express.Router();
const controller = require('../controllers/subject')

route.get('/', controller.getAllSubjects)

route.get('/add-subject', controller.getAddSubject)

route.post('/add-subject', controller.postAddSubject)

route.get('/:id/givescore', controller.getScore)

route.post('/:id/givescore', controller.postScore)

route.get('/edit-subject/:id', controller.getEditSubject)

route.post('/edit-subject/:id', controller.postEditSubject)

route.get('/delete-subject/:id', controller.getDeleteSubject)

module.exports = route
