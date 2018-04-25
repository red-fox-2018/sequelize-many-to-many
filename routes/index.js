const route = require('express').Router()

route.get('/',(req,res)=>{
  res.render('index.ejs')
})

module.exports = route
