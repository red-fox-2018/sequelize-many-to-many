const route = require('express').Router()
const { Student,Subject,StudentSubject } = require('../models')

route.get('/', (req,res) => {
    Student.findAll ({
        raw:true
    })
    .then ((students) => {
        // console.log(typeof students);
        res.render('./student/student', {students})
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/add',(req,res) => {
    res.render('./student/studentAdd')
})

route.post('/add',(req,res) => {
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then((newStudent) => {
        res.redirect('./')
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/addSubject/:id', (req,res) => {
    Student.findById(req.params.id)
    .then((student) => {
        Subject.findAll()
        .then((subjects) => {
            res.render('./student/addSubject', { student, subjects })
        })
    })
})

route.post('/addSubject/:id', (req,res) => {
    StudentSubject.create({
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
    })
    .then((addedSubject) => {
        res.redirect('/student')
    })
})

route.get('/edit/:id', (req,res) => {
    Student.findById(req.params.id)
    .then((student) => {
        res.render('./student/editStudent', {student})
    })
})

route.post('/edit/:id',(req,res) => {
    
        Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        },{
            where: {id:req.params.id}
        })
        .then((edited) => {
            res.redirect('/student')
        })
        .catch((err) => {
            console.log(err);
            
        })

})

route.get('/delete/:id', (req,res) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deleted) => {
        res.redirect('/student')
    })
})

module.exports = route