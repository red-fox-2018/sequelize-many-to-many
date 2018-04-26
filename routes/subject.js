const route = require('express').Router()
const { Subject, Teacher } = require('../models')

route.get('/',(req,res) => {
    Subject.findAll({
        include: [Teacher],
        order: ['id']
    })
    .then((subjects) => {
        console.log(subjects);
        
        res.render('./subject/subject', { subjects })
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/add',(req,res) => {
    res.render('./subject/subjectAdd')
})

route.post('/add', (req,res) => {
    Subject.create({
        subject_name: req.body.subject_name
    })
    .then((newSubject) => {
        res.redirect('./')
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/edit/:id',(req,res) => {
    Subject.findById(req.params.id)
    .then((subject)=> {
        res.render('./subject/editSubject', { subject })
    })
})

route.post('/edit/:id',(req,res) => {
    Subject.update({
        subject_name: req.body.subject_name
    }, {
        where: {
            id:req.params.id
        }
    })
    .then((edited) => {
        res.redirect('/subject')
    })
    .catch((err)=> {
        console.log(err);
        
    })
})

route.get('/delete/:id', (req,res) => {
    Subject.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deleted) => {
        res.redirect('/subject')
    })
})

module.exports = route