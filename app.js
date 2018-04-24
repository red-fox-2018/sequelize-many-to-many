const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

const routes = require('./routes/index')
app.use('/', routes)

const studentRoutes = require('./routes/student')
app.use('/students', studentRoutes)

const subjectRoutes = require('./routes/subject')
app.use('/subjects', subjectRoutes)


app.listen(3000,console.log('connected !!'))