const { Teacher, Subject } = require('../models');
class Controller {
  static index(req,res){
    Teacher.findAll({
      include: [{
        model: Subject
      }]
    })
    .then( teachers => {
      // console.log(teachers);
      res.render('teacher/list', {page:'list', Teachers: teachers})
    })
  }

  static addGet (req, res){
    Subject.findAll()
    .then( subjects => {
      res.render('teacher/add', {error: null, Subjects: subjects})
    })
    .catch( err => {
      Subject.findAll()
      .then( subjects => {
        res.render('teacher/add', {error:err.message, Subjects: subjects})
      })
    })
  }

  static addPost ( req, res) {
    if(req.body.SubjectId == ""){
      req.body.SubjectId = null
    }

    Teacher.build({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      SubjectId: req.body.SubjectId
    })
    .save()
    .then((newData)=>{
      res.redirect('/teachers')
    })
    .catch( err =>{
      Subject.findAll()
      .then( subjects => {
        res.render('teacher/add', {error:err.message, Subjects: subjects})
      })
    })
  }

  static updateGet(req, res){
    Teacher.findById(req.params.id)
      .then(teacher => {
        Subject.findAll()
        .then( subjects => {
          // console.log(subjects);
          res.render('teacher/edit', {error:null, Subjects: subjects, teacher: teacher})
        })
      })
  }

  static UpdatePost(req, res){
    if(req.body.SubjectId == ""){
      req.body.SubjectId = null
    }

    Teacher.findById(req.params.id)
    .then( teacher => {
      teacher.update({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        SubjectId: req.body.SubjectId
      })
      .then( () => {
        res.redirect('/teachers')
      })
      .catch(err => {
        Teacher.findById(req.params.id)
          .then(teacher => {
            Subject.findAll()
            .then( subjects => {
              // console.log(subjects);
              res.render('teacher/edit', {error:err.message, Subjects: subjects, teacher: teacher})
            })
          })

      })
    })
  }

  static delete(req, res){
    Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(teacher => {
      res.redirect('/teachers')
    })
  }
}

module.exports = Controller;
