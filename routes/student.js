var express = require('express');
var router = express.Router();
var model = require('../models')
var bodyParser = require('body-parser');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/',function(req,res){
    // res.send('ini sudah routing coy')
    model.Student.findAll()
    .then(students => {
        // res.send(students)
        res.render('student', {
            students:students
        })
    })
    .catch(error => {
        res.send(error)
    })
})

router.get('/addStudent',function(req,res){
    res.render('addStudent')
})

router.post('/addStudent',function(req,res){
    // res.send(req.body)
    model.Student.create(
        req.body
    )
    .then(succes => {
        res.redirect('/students')
    })
    .catch(error =>{
        res.send('ini pesan', error)
    })
})

router.get('/:id/addsubject',function(req,res){
    // res.send(req.params.id)
    model.Student.findById(req.params.id)
    .then(student => {
        // res.send(student)
        model.Subject.findAll()
        .then(subjects => {
            // let obj = {
            //     murid:student,
            //     pelajaran:subjects
            // }
            // res.send(obj)
            res.render('addSubjectToStudent',{
                student:student,
                subjects:subjects
            })
        })
    })
    .catch(error => {
        res.send(err)
    })
})


router.get('/studentwithother',function(req,res){
    model.Student.findAll({
        include: [model.StudentSubject]
    })
    .then(data => {
        res.send(data)
    })
})

module.exports = router