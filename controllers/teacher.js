/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const {
   Subject,
   Teacher
} = require('../models');

class TeacherController {

   static index(req, res) {
      Teacher
         .findAll({
            include: [{
               model: Subject
            }],
            order: [
               ['first_name', 'ASC']
            ]
         })
         .then(teachers => {
            // res.send(teachers);
            res.render('teachers/index', {
               teachers
            });
         });
   }

   static add(req, res) {
      Subject
         .findAll()
         .then(subjects => {
            res.render('teachers/add', {
               subjects
            });
         });
   }
   static create(req, res) {
      Teacher
         .create(req.body)
         .then(result => {
            res.redirect('/teachers', {
               result
            });
         }).catch((err) => {
            Subject
               .findAll()
               .then(subjects => {
                  res.render('teachers/add', {
                     subjects,
                     err
                  });
               });
         });
   }

   static edit(req, res) {
      Teacher
         .findById(req.params.id)
         .then(teacher => {
            Subject
               .findAll()
               .then(subjects => {
                  res.render('teachers/edit', {
                     teacher,
                     subjects
                  });
               });
         });
   }

   static update(req, res) {
      let id = parseInt(req.params.id);
      Teacher
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
            res.redirect('/teachers');
         }).catch((err) => {
            Teacher
               .findById(req.params.id)
               .then(teacher => {
                  Subject
                     .findAll()
                     .then(subjects => {
                        res.render('teachers/edit', {
                           teacher,
                           subjects,
                           err
                        });
                     });
               });
         });
   }

   static delete(req, res) {
      Teacher
         .findById(
            req.params.id, {
               include: [{
                  model: Subject
               }]
            }
         )
         .then(teacher => {
            res.render('teachers/delete', {
               teacher
            });
         });
   }

   static destroy(req, res) {
      Teacher
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/teachers');
         });
   }
}

module.exports = TeacherController;
