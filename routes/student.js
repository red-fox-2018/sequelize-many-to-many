const express = require('express')
const router = express()
const Model = require('../models')

router.get('/students',function(req,res){
    Model.Student.findAll()
    .then(function(listStudentsData){
        res.render('student',{listStudentsData,message:null})
    })
})

router.get('/students/add',function(req,res){
    res.render('studentAdd',{err:null})
})

router.post('/students/add',function(req,res){
    Model.Student.create(
        req.body
    )
    .then(function(){
        res.render('student',{message:`success create student`,err:null})
    })
    .catch(function(err){
        res.render('studentAdd',{message:null,err:err.errors[0].message})
    })
})

router.get('/students/:id/addsubject',function(req,res){
    let id = req.params.id
    Model.Student.findOne(
        {
            where: {id:id}
        }
    )
    .then(function(student){
        return Model.Subject.findAll()
        .then(function(subject){
            return [student,subject]
        })
    })
    .then(function(result){
        res.render('subject',{result,err:null})
    })
    .catch(function(err){
        res.render('subject',{result:null,err})
    })
})

router.post('/students/:id/addsubject',function(req,res){
    let studentId = req.params.id
    let subjectId = req.body.idSubject
    Model.StudentSubject.create(
        {
            SubjectId: subjectId,
            StudentId: studentId
        }
    )
    .then(function(){
        res.redirect('/students')
    })
})

router.get('/subjects',function(req,res){
    Model.Subject.findAll(
        {
            include:[
                {
                    model : Model.Student
                }
            ]
        }
    )
    .then(function(listSubject){
        res.render('listSubject',{listSubject})
    })
})

router.get('/subjects/:id/enrolledstudents',function(req,res){
    let idSubject = req.params.id
    Model.Subject.findOne(
        {
            include:[
                {
                    model: Model.Student
                }
            ],
            where: {id:idSubject}
        }
    )
    .then(function(subject){
        //res.send(subject)
        res.render('enrollStudent',{subject})
    })
})

router.get('/subjects/:id/givescore/:subjectId',function(req,res){
    let idStudent = req.params.id
    let idSubject = req.params.subjectId
    Model.StudentSubject.findOne(
        {
            where: {SubjectId:idSubject, StudentId:idStudent}
        }
    )
    .then(function(student){
        res.render('givescore',{student})
    })
})

router.post('/subjects/:id/givescore/:subjectId',function(req,res){
    let idStudent = req.params.id
    let idSubject = req.params.subjectId

    Model.StudentSubject.update(
        {score: req.body.givescore},
        {where: { SubjectId: idSubject, StudentId: idStudent }},
    )
    .then(function(){
        res.redirect(`/subjects`)
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = router