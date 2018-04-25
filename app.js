'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const model = require('./models');
const routes = require('./routes');
const routesStudent = require('./routes/student');
const routesTeacher = require('./routes/teacher');
const routesSubject = require('./routes/subject');
let app = express();
app.locals.isSubject = require('./helpers/helper')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', routes);
app.use('/students', routesStudent);
app.use('/teachers', routesTeacher);
app.use('/subjects', routesSubject);






app.listen(3001);
