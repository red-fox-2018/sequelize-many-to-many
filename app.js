'use strict';
const app = require('express')();
const bodyParser = require('body-parser');
let indexRoutes = require('./routes/index');
let studentRoutes = require('./routes/student');
let teacherRoutes = require('./routes/teacher');
let subjectRoutes = require('./routes/subject');

app.use(bodyParser.urlencoded({
  extended: false
}))

app.locals.teacher_helper = require('./helpers/teacher-helper')

app.set('view engine', 'ejs');

app.use('/', indexRoutes);

app.use('/students', studentRoutes);

app.use('/teachers', teacherRoutes);

app.use('/subjects', subjectRoutes);

app.listen(3000);