const express = require('express');
const app = express();

const studentRouter = require('./router/student');
const subjectRouter = require('./router/subject');

app.set('view engine', 'ejs');

app.use('/', studentRouter);
app.use('/', subjectRouter);

app.listen(3000)