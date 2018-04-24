const studentRoutes = require('express').Router()
const models = require('../models')

studentRoutes.get('/', function(req, res){
    models.Student.findAll()
    .then(function(studentData){
        res.render('studentData', {studentData})
    })
})

studentRoutes.get('/:id/addsubject', function(req, res){
    let id = req.params.id
    models.Student.findById(id)
    .then(function(student){
        models.Subject.findAll()
        .then(function(subjectData){
            res.render('studentAddSubjectForm',{student,subjectData})
        })
    })
})

studentRoutes.post('/:id/addsubject', function(req, res){
    let StudentId = req.params.id
    let SubjectId = req.body.SubjectId 
    models.StudentSubjects.create({StudentId, SubjectId})
    .then(function(){
        res.redirect('/students')
    })
})


module.exports = studentRoutes