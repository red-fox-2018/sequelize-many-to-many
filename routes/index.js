/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
