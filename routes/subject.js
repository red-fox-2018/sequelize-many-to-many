const subjectRoutes = require('express').Router()
const models = require('../models')

subjectRoutes.get('/', function(req, res){
    models.Subject.findAll({
        order:[
            ['id','ASC']
        ],
        include: models.Teacher
    })
    .then(function(subjectData){
        res.render('subjectData',{subjectData})
    })
})

subjectRoutes.get('/:id/enrolledstudents', function(req, res){
    let SubjectId = req.params.id
    models.Subject.findOne({
        where: {id: SubjectId},
        include:{
            model: models.Student,
            throught: models.StudentSubject
        }
    })
    .then(subjectStudentData =>{
        console.log('---->',subjectStudentData.Students[0].StudentSubjects)
        res.render('enrolledStudentsForm',{subjectStudentData})
    })
})

subjectRoutes.get('/:id/givescore', function(req, res){
    let StudentId = req.params.id
    models.StudentSubjects.find({where:{StudentId: StudentId}})
    .then(studentData => {
        res.render('giveScoreStudentForm',{studentData})
    })
})

subjectRoutes.post('/:subject_id/:student_id/givescore',function(req, res){
    let StudentId = req.params.subject_id
    let SubjectId = req.params.student_id
    let Score = req.body.Score
    models.StudentSubjects.update({Score: Score},{where:{SubjectId: SubjectId, StudentId: StudentId}})
    .then(()=>{
        res.redirect('/subjects')
    })
})

module.exports = subjectRoutes