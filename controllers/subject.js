/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/


const {
   Subject,
   Teacher,
   StudentSubject
} = require('../models');

class SubjectController {

   static index(req, res) {
      Subject
         .findAll({
            include: [{
               model: Teacher
            }],
            order: [
               ['name', 'ASC']
            ],
         })
         .then(subjects => {
            res.render('subjects/index', {
               subjects
            });
         });
   }

   static viewTeachers(req, res) {
      Subject
         .findById(req.params.id)
         .then(subject => {
            subject
               .getTeachers({
                  order: [
                     ['first_name', 'ASC']
                  ]
               })
               .then(teachers => {
                  res.render('subjects/teachers', {
                     subjectName: subject.name,
                     teachers
                  });
               });
         });
   }

   static enrolledStudents(req, res) {
      Subject
         .findById(req.params.id)
         .then(subject => {
            subject
               .getStudents({
                  order: [
                     ['first_name', 'ASC']
                  ]
               })
               .then(students => {
                  res.render('subjects/students', {
                     subject,
                     students
                  });
               });
         });
   }

   // static viewScoreStudents(req, res) {
   //    StudentSubject
   //       .findById(req.params.id)
   //       .then(studentSubject => {
   //          res.render('subjects/students', {
   //             studentSubject
   //          });
   //       });
   // }

   static score(req, res) {
      Subject
         .findById(req.params.id)
         .then(subject => {
            subject
               .getStudents({
                  order: [
                     ['id', 'ASC']
                  ]
               })
               .then(students => {
                  res.render('subjects/score', {
                     students,
                     subject,
                  });
               });
         });
   }

   static createScore(req, res) {
      StudentSubject
         .update({
            score: req.body.score,
         }, {

            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/subjects');
         }).catch((err) => {
            StudentSubject
               .findAll()
               .then(studentsubjects => {
                  res.render('subjects/score', {
                     studentsubjects,
                     err
                  });
               });
         });
   }

   static add(req, res) {
      Subject
         .findAll({
            order: [
               ['id', 'ASC']
            ]
         })
         .then(subjects => {
            res.render('subjects/add', {
               subjects
            });
         });
   }

   static create(req, res) {
      Subject
         .create(req.body)
         .then(result => {
            res.redirect('/subjects');
         });
   }

   static edit(req, res) {
      Subject
         .findById(req.params.id)
         .then(subject => {
            res.render('subjects/edit', {
               subject
            });
         });
   }

   static update(req, res) {
      Subject
         .update(req.body, {
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/subjects');
         });
   }

   static delete(req, res) {
      Subject
         .findById(
            req.params.id
         )
         .then(subject => {
            res.render('subjects/delete', {
               subject
            });
         });
   }

   static destroy(req, res) {
      Subject
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/subjects');
         });
   }
}

module.exports = SubjectController;
