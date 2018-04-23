
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs');
const port = process.env.PORT || 3000;

const teacherRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const subjectRouter = require('./routes/subject');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// @router definition
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);
app.use('/subject', subjectRouter);

app.get('*', (req, res) => {
  res.send('Page unavailable!');
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});