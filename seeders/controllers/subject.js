const { Teacher, Subject } = require('../models');
class Controller {
  static index(req,res){
    Subject.findAll()
    .then( subjects => {
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
