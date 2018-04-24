const express = require('express')
const app = express()
// const router = express.Router();

app.set('view engine', 'ejs')

// ROUTING
const student = require('./routes/student.js')
app.use('/students', student)


app.listen(3000, function(){
    console.log('running on 3000')
})