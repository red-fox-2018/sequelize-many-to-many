const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const student = require('./routes/student')
const subject = require('./routes/subjects')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/students',student)
app.use('/subjects',subject)

app.listen(3000)