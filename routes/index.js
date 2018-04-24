const routes = require ('express').Router();
const teacher = require('./teacher');
const subject = require('./subject');

routes.get('/', function(req, res){
  res.render('home', {page: 'home'})
})

routes.use('/teachers', teacher)
routes.use('/subjects', subject)



module.exports = routes
