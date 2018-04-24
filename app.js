const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const student = require('./routes/student')
const subject = require('./routes/subject')

app.use(bodyParser.urlencoded({ extended:false }))
app.set('view engine', 'ejs')

app.get('/',function(req,res){
    res.redirect('/students')
})

app.use('/', student)
app.use('/', subject)

app.listen(3000)