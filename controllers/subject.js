const { Teacher, Subject, Student, Student_Subject } = require('../models');
class Controller {
  static index(req,res){
    Subject.findAll({
      include: [{
        model:Teacher
      }],
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then( subjects => {
      // res.send(subjects)
      res.render('subject/list', {page:'list', Subjects: subjects})
    })
  }

  static viewTeachers(req,res){
    Teacher.findAll({
      where: {SubjectId : req.params.id}
    })
    .then( teachers => {
      res.render('subject/list-teacher', {Teachers: teachers})
    })
  }

  static addGet (req, res){
    res.render('subject/add')
  }

  static addPost ( req, res) {
    Subject.create({
      subject_name : req.body.subject
    })
    .then((newSubject)=>{
      res.redirect('/subjects')
    })
  }

  static enrolled(req, res){
    Subject.findOne({
      include: [{
        model:Student
      }],
      where: {
        id: req.params.id
      }
    })
    .then((dataSubjects) => {
      // res.send(dataSubjects)
      res.render('subject/enrolled-list', {dataSubjects: dataSubjects})
    })
  }

  static givescoreGet(req, res){
    // res.send(req.params)
    Subject.findOne({
      include: [{
        model: Student,
        where: {id:req.params.studentid}
      }],
      where: {id: req.params.id}
    })
    .then(subject => {
      // res.send(subject)
      res.render('subject/givescore', {subject})
    })
  }

  static givescorePost(req, res){
    Student_Subject.findOne({
      where: {
        SubjectId : req.params.id,
        StudentId : req.params.studentid
      }
    })
    .then(subject => {
      subject.update({
        score: req.body.score
      })
      .then( updateData => {
        res.redirect(`/subjects/${req.params.id}/enrolledstudent`)
      })
    })
  }

  static updateGet(req, res){
    Subject.findById(req.params.id)
    .then(subject => {
      res.render('subject/edit', {Subject: subject})
    })
  }

  static UpdatePost(req, res){
    Subject.update({
      subject_name : req.body.subject
    },{
      where: {
        id: req.params.id
      }
    })
    .then((newSubject)=>{
      res.redirect('/subjects')
    })
  }

  static delete(req, res){
    Subject.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(subject => {
      res.redirect('/subjects')
    })
  }
}

module.exports = Controller;
