const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.locals.teacherHelpers = require ('./helpers/teacherHelper')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)


app.listen(3000, ()=> {
  console.log('Server Connected at port 3000')
})
