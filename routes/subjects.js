const express =require('express');
const router = express();
const Model = require('../models')

router.get('/', (req, res) => {
    Model.Subject.findAll(
        { include: { model: Model.Student },
        order:[['id','ASC']]
     }
    ).then(subjects => {
        res.render('subjects', { subjects })
    }).catch(err => {
        console.log(err)
    })
})
router.get('/:id/enrolledstudents',(req,res)=>{
    subjectId = req.params.id
    Model.Subject.findOne({
        where:{id:subjectId},
        include: { model: Model.Student }
    }).then(subject=>{
        // res.json(subject.Students[0].SubjectStudents.score)
        res.render('enrolledStudents',{subject})
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/:subjectId/students/:studentId/givescore', (req, res) => {
    studentId = req.params.studentId;
    Model.Student.findOne({
        where: { id: studentId }
    }).then(student => {
        // res.json(subject)
        res.render('addScore', { student })
    }).catch(err => {
        console.log(err)
    })
})

router.post('/:subjectId/students/:studentId/givescore', (req, res) => {
    studentId = req.params.studentId;
    subjectId = req.params.subjectId
    let givedScore = req.body.score
    Model.SubjectStudents.update({score:givedScore},{
        where: { SubjectId: subjectId },
        where: { StudentId: studentId }
    }).then(subject => {
        res.redirect('/subjects')
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router