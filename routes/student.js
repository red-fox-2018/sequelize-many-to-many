const express = require('express');
const router = express();
const Model = require('../models')

router.get('/',(req,res)=>{
    Model.Student.findAll(
        {include:{ model: Model.Subject }}
    ).then(students => {
        res.render('students',{students})
    })
})


router.get('/:id/addsubject',(req,res)=>{
    let studentId = req.params.id
    console.log(req.body)
    Model.Student.findOne({
        where: { id: studentId}
        
    }).then(student=>{
        res.render('addSubjectToStudent',{student})
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/:id/addsubject',(req,res)=>{
    let studentId = req.params.id
    Model.Subject.findOne({
        where:{name:req.body.name}
    }).then(subject=>{
        Model.SubjectStudents.create({
            SubjectId:subject.id,
            StudentId:studentId
        }).then(result=>{
           res.redirect('/students')
        }).catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router