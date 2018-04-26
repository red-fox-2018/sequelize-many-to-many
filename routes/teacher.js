const route = require('express').Router()
const { Teacher,Subject } = require('../models')
// const models = require('../models')
route.get('/', (req,res) => {
    Teacher.findAll ({
        include:[Subject], 
        order: ['id']
    })
    .then((teachers) => {
        
        res.render('./teacher/teacher', { teachers })
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/add', (req,res) => {
    Subject.findAll()
    .then((subjects) => {
        res.render('./teacher/teacherAdd', { subjects })
    })
    .catch((err) => {
        Subject.findAll()
        .then((subjects) => {
            res.render('./teacher/teacherAdd', { subjects,err })
        })
    })
})

route.post('/add', (req, res) => {
    Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    })
    .then((newTeacher) => {
        res.redirect('./')
    })
    .catch((err) => {
        Subject.findAll()
        .then((subjects) => {
            res.render('./teacher/teacherAdd', { subjects, err })
        })
    })
})

route.get('/edit/:id', (req,res) => {
    Teacher.findById(req.params.id)
    .then((teacher) => {
        Subject.findAll()
        .then((subjects) => {
            res.render('./teacher/editTeacher', { teacher, subjects })
        })
    })
    .catch((err) => {
        Teacher.findById(req.params.id)
        .then((teacher) => {
            Subject.findAll()
            .then((subjects) => {
                res.render('./teacher/teacherAdd', { teacher, subjects, err })
            })
        })
    })
})

route.post('/edit/:id', (req,res) => {

    Teacher.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    }, {
        where: { id:req.params.id }
    })
    .then((edited) => {
        res.redirect('/teacher')
    })
    .catch((err) => {
        Teacher.findById(req.params.id)
        .then((teacher) => {
            Subject.findAll()
            .then((subjects) => {
                res.render('./teacher/teacherAdd', { teacher, subjects, err })
            })
        })
    })
})

route.get('/delete/:id', (req,res) => {

    Teacher.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deleted) => {
        res.redirect('/teacher')
    })
})

module.exports = route