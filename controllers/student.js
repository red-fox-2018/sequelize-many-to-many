/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const {
   Subject,
   Student,
   StudentSubject
} = require('../models');

class StudentController {

   static index(req, res) {
      Student
         .findAll({
            order: [
               ['id', 'ASC']
            ]
         })
         .then(students => {
            res.render('students/index', {
               students
            });
         });
   }

   static add(req, res) {
      Student
         .findAll({
            order: [
               ['id', 'ASC']
            ]
         })
         .then(students => {
            res.render('students/add', {
               students
            });
         });
   }

   static addSubject(req, res) {
      Student
         .findById(req.params.id)
         .then(student => {
            Subject
               .findAll()
               .then(subjects => {
                  res.render('students/addsubject', {
                     student,
                     subjects
                  });
               });
         });
   }

   static createSubject(req, res) {
     let id = parseInt(req.params.id);
     StudentSubject
        .create({
           SubjectId: req.body.SubjectId,
           StudentId: req.params.id,
        })
        .then(result => {
           res.redirect('/students');
        }).catch((err) => {
           StudentSubject
              .findAll()
              .then(studentsubjects => {
                 res.render('students/addsubject', {
                    studentsubjects,
                    err
                 });
              });
        });
   }

   static create(req, res) {
      Student
         .create(req.body)
         .then(result => {
            res.redirect('/students');
         }).catch((err) => {
            Student
               .findAll()
               .then(students => {
                  res.render('students/add', {
                     students,
                     err
                  });
               });
         });
   }

   static edit(req, res) {
      Student
         .findById(req.params.id)
         .then(student => {
            res.render('students/edit', {
               student
            });
         });
   }

   static update(req, res) {
      let id = parseInt(req.params.id);
      Student
         .update({
            id: id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            SubjectId: req.body.SubjectId,
            email: req.body.email,
            phone: req.body.phone
         }, {
            where: {
               id: id
            }
         })
         .then(result => {
            res.redirect('/students');
         }).catch((err) => {
            Student
               .findAll()
               .then(students => {
                  res.render('students/edit', {
                     students,
                     err
                  });
               });
         });
   }

   static delete(req, res) {
      Student
         .findById(
            req.params.id
         )
         .then(student => {
            res.render('students/delete', {
               student
            });
         });
   }

   static destroy(req, res) {
      Student
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/students');
         });
   }
}

module.exports = StudentController;
