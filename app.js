const app = require('express')();
const bodyParser =require('body-parser');

const index = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')
//views
app.set('view engine', 'ejs');

//body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/',index)
app.use('/student',student)
app.use('/teacher',teacher)
app.use('/subject',subject)

//helper
app.locals.checkUnnasigned = require('./helper/helper')

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});